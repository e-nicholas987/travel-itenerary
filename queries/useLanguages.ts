import { useQuery } from "@tanstack/react-query";

import { fetchLanguages } from "@/services/metaServices";

export const useLanguages = () =>
  useQuery({
    queryKey: ["meta", "languages"],
    queryFn: fetchLanguages,
    staleTime: 60 * 60 * 1000,
  });
