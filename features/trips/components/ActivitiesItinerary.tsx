"use client";

import ItineraryCategorySection from "./ItineraryCategorySection";
import ItineraryEmptyState from "./ItineraryEmptyState";
import ActivitiesCard from "@/features/activities/components/ActivitiesCard";
import { useItineraryStorage } from "@/features/activities/hooks/useItineraryStorage";
import type { AttractionsProduct } from "@/features/activities/types";
import { ACTIVITIES_ITINERARY_STORAGE_KEY } from "../../../constants/storageKeys";

export default function ActivitiesItinerary() {
  const { items: activities, removeFromItinerary } =
    useItineraryStorage<AttractionsProduct>({
      storageKey: ACTIVITIES_ITINERARY_STORAGE_KEY,
      getId: (activity) => activity.id,
    });

  return (
    <ItineraryCategorySection type="activities">
      {activities.length === 0 ? (
        <ItineraryEmptyState type="activities" />
      ) : (
        <div className="space-y-3">
          {activities.map((activity) => (
            <ActivitiesCard
              key={activity.id}
              activity={activity}
              onRemoveFromItinerary={() => removeFromItinerary(activity.id)}
            />
          ))}
        </div>
      )}
    </ItineraryCategorySection>
  );
}
