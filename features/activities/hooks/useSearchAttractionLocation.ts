import { useQuery } from "@tanstack/react-query";
import { searchAttractionLocations } from "@/features/activities/api/activitiesService";

export const useSearchAttractionLocation = (query: string) =>
  useQuery({
    queryKey: ["attractions", "locations", query],
    queryFn: () => searchAttractionLocations(query),
    enabled: !!query,
  });
