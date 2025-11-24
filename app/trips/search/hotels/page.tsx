import type { Metadata } from "next";

import HotelsSearchPage from "@/features/hotels/components/HotelsSearchPage";

export const metadata: Metadata = {
  title: "Search hotels",
  description:
    "Search for hotels and stays and add them to your trip itinerary.",
};

export default function HotelsPage() {
  return <HotelsSearchPage />;
}
