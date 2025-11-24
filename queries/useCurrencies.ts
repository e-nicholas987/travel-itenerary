import { useQuery } from "@tanstack/react-query";
import { fetchCurrencies } from "@/services/metaServices";

export const useCurrencies = () =>
  useQuery({
    queryKey: ["meta", "currencies"],
    queryFn: fetchCurrencies,
    staleTime: 60 * 60 * 1000,
  });
