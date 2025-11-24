import { API_ROUTES } from "@/constants/apiRoutes";
import { apiClient } from "@/lib/apiClient";

import type { CurrenciesResponse, LanguagesResponse } from "@/types/api";

export const fetchCurrencies = async (): Promise<CurrenciesResponse> => {
  const { data } = await apiClient.get<CurrenciesResponse>(
    API_ROUTES.meta.getCurrency
  );

  return data;
};

export const fetchLanguages = async (): Promise<LanguagesResponse> => {
  const { data } = await apiClient.get<LanguagesResponse>(
    API_ROUTES.meta.getLanguages
  );

  return data;
};
