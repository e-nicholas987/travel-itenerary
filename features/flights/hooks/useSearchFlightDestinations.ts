import { useQuery } from "@tanstack/react-query";

import type { SearchFlightDestinationsParams } from "../types";
import { searchFlightDestinations } from "../api/flightServices";

export const useSearchFlightDestinations = (
  params: SearchFlightDestinationsParams
) =>
  useQuery({
    queryKey: ["flights", "search-destinations", params],
    queryFn: () => searchFlightDestinations(params),
    enabled: !!params.query,
  });


