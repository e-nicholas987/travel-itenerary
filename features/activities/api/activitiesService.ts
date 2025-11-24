import { API_ROUTES } from "@/constants/apiRoutes";
import { apiClient } from "@/lib/apiClient";
import type {
  SearchAttractionsParams,
  SearchAttractionsResponse,
  SearchAttractionLocationResponse,
} from "../types";
import buildQueryString from "@/lib/utils/buildQueryString";

export const searchAttractionLocations = async (
  query: string
): Promise<SearchAttractionLocationResponse> => {
  const { data } = await apiClient.get(
    API_ROUTES.attraction.searchAttractionLocation,
    { params: { query } }
  );

  return data;
};

export const searchAttractions = async (
  params: SearchAttractionsParams
): Promise<SearchAttractionsResponse> => {
  const queryParams: Record<string, string | number | undefined> = {
    ...params,
  };
  const { data } = await apiClient.get(
    buildQueryString(API_ROUTES.attraction.searchAttractions, queryParams)
  );

  return data;
};
