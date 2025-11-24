import type { Metadata } from "next";

import FlightsSearchPage from "@/features/flights/components/FlightsSearchPage";

export const metadata: Metadata = {
  title: "Search flights",
  description: "Search for flights and add them to your trip itinerary.",
};

export default function FlightsPage() {
  return <FlightsSearchPage />;
}
