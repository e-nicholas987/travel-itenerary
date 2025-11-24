import { buttonVariants } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Plan your trip with ease",
};

export default function Home() {
  return (
    <section className="flex flex-1 items-center justify-center p-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-2xl font-semibold text-black-primary">
          Plan and organize every part of your trip in one place
        </h1>
        <p className="text-sm font-medium text-black-secondary">
          Search flights, stays, and activities, then save your favourites into
          a single itinerary.
        </p>
        <div className="flex items-center justify-center">
          <Link
            href={ROUTES.PLAN_TRIP}
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            Plan a trip
          </Link>
        </div>
      </div>
    </section>
  );
}
