import type { Metadata } from "next";
import ActivitiesSearchPage from "@/features/activities/components/ActivitiesSearchPage";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search activities",
  description:
    "Search for attractions and activities and add them to your trip itinerary.",
};

export default function ActivitiesPage() {
  return (
    <Suspense>
      <ActivitiesSearchPage />
    </Suspense>
  );
}
