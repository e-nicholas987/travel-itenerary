"use client";

import ItineraryCategorySection from "./ItineraryCategorySection";
import ItineraryEmptyState from "./ItineraryEmptyState";
import FlightCard from "@/features/flights/components/FlightCard";
import type { FlightOffer } from "@/features/flights/types";
import { FLIGHTS_ITINERARY_STORAGE_KEY } from "@/constants/storageKeys";
import { useItineraryStorage } from "@/features/activities/hooks/useItineraryStorage";

export default function FlightsItinerary() {
  const { items: flights, removeFromItinerary } =
    useItineraryStorage<FlightOffer>({
      storageKey: FLIGHTS_ITINERARY_STORAGE_KEY,
      getId: (flight) => flight.token,
    });

  return (
    <ItineraryCategorySection type="flights">
      {flights.length === 0 ? (
        <ItineraryEmptyState type="flights" />
      ) : (
        <div className="space-y-3">
          {flights.map((flight) => (
            <FlightCard
              key={flight.token}
              offer={flight}
              onRemoveFromItinerary={() => removeFromItinerary(flight.token)}
            />
          ))}
        </div>
      )}
    </ItineraryCategorySection>
  );
}
