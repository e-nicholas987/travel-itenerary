"use client";

import ItineraryCategorySection from "./ItineraryCategorySection";
import ItineraryEmptyState from "./ItineraryEmptyState";
import HotelCard from "@/features/hotels/components/HotelCard";
import type { SearchHotelsHotel } from "@/features/hotels/types";
import { useItineraryStorage } from "@/features/activities/hooks/useItineraryStorage";
import { HOTELS_ITINERARY_STORAGE_KEY } from "@/constants/storageKeys";

export default function HotelItinerary() {
  const { items: hotels, removeFromItinerary } =
    useItineraryStorage<SearchHotelsHotel>({
      storageKey: HOTELS_ITINERARY_STORAGE_KEY,
      getId: (hotel) => hotel.hotel_id,
    });

  return (
    <ItineraryCategorySection type="hotels">
      {hotels.length === 0 ? (
        <ItineraryEmptyState type="hotels" />
      ) : (
        <div className="space-y-3">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.hotel_id}
              hotel={hotel}
              onRemoveFromItinerary={() => removeFromItinerary(hotel.hotel_id)}
            />
          ))}
        </div>
      )}
    </ItineraryCategorySection>
  );
}
