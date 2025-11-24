export type SearchFlightsParams = {
  fromId: string;
  toId: string;
  departDate: string;
  returnDate?: string;
  stops?: "none" | "0" | "1" | "2";
  pageNo?: number;
  adults?: number;
  children?: string;
  sort?: "BEST" | "CHEAPEST" | "FASTEST";
  cabinClass?: "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST";
  currency_code?: string;
};

export type SearchFlightsResponse = {
  status: boolean;
  message: string;
  timestamp: number;
  data?: unknown;
};

export type SearchFlightDestinationsParams = {
  query: string;
};

export type FlightDestination = {
  id: string;
  name: string;
  code?: string;
  type?: string;
};

export type SearchFlightDestinationsResponse = {
  status: boolean;
  message: string;
  timestamp: number;
  data?: FlightDestination[];
};
