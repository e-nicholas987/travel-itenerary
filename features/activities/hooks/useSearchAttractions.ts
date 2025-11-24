import { useQuery } from "@tanstack/react-query";

import type { SearchAttractionsParams } from "../types";
import { searchAttractions } from "@/features/activities/api/activitiesService";

export const useSearchAttractions = ({
  params,
  enabled,
}: {
  params: SearchAttractionsParams;
  enabled: boolean;
}) =>
  useQuery({
    queryKey: ["activities", "search", params],
    queryFn: () => searchAttractions(params),
    enabled: enabled,
  });
