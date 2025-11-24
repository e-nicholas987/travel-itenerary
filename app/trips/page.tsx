import ActivitiesItinerary from "@/features/trips/components/ActivitiesItinerary";
import FlightsItinerary from "@/features/trips/components/FlightsItinerary";
import HotelItinerary from "@/features/trips/components/HotelItinerary";
import TripHero from "@/features/trips/components/TripHero";

export default function TripPlannerPage() {
  return (
    <div className="flex-1 rounded-sm bg-white p-4 sm:p-6 lg:p-8">
      <TripHero />
      <h2 className="mt-10 sm:mt-14 lg:mt-22.5 text-lg sm:text-xl tracking-[-2%] font-semibold leading-7 sm:leading-8">
        Trip Itineraries
      </h2>
      <p className="mt-1 text-xs sm:text-sm leading-5.5 font-medium text-black-secondary">
        Your trip itineraries are placed here
      </p>
      <div className="mt-5 sm:mt-7 space-y-3 sm:space-y-4">
        <FlightsItinerary />
        <HotelItinerary />
        <ActivitiesItinerary />
      </div>
    </div>
  );
}
