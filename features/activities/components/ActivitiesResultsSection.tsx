import Image from "next/image";

import { Button } from "@/components/ui";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";
import { IMAGES } from "@/constants/images";
import { cn } from "@/lib/utils/cn";
import type { ActivityPreview } from "@/features/activities/types";

type ActivitiesResultsSectionProps = {
  activities: ActivityPreview[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function ActivitiesResultsSection({
  activities,
  currentPage,
  totalPages,
  onPageChange,
}: ActivitiesResultsSectionProps) {
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <section aria-label="Activities search results" className="space-y-4">
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <div>
          <h2 className="text-base font-semibold leading-6 tracking-[-0.02em]">
            Available activities
          </h2>
          <p className="text-xs font-medium text-black-secondary">
            Showing {activities.length} experiences · Page {currentPage} of{" "}
            {totalPages}
          </p>
        </div>

        <p className="text-xs font-medium text-black-secondary">
          Results are for demonstration only. Data integration will connect to
          the Booking.com API.
        </p>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>

      <nav
        aria-label="Pagination"
        className="mt-4 flex items-center justify-between gap-4 border-t border-neutral-300 pt-4"
      >
        <p className="text-xs font-medium text-black-secondary">
          Page {currentPage} of {totalPages}
        </p>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="tertiary"
            size="sm"
            disabled={!hasPrevious}
            onClick={() => hasPrevious && onPageChange(currentPage - 1)}
            className="min-w-[5.5rem]"
          >
            <ArrowLeftIcon className="size-4" />
            Prev
          </Button>
          <Button
            type="button"
            variant="tertiary"
            size="sm"
            disabled={!hasNext}
            onClick={() => hasNext && onPageChange(currentPage + 1)}
            className="min-w-[5.5rem]"
          >
            Next
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </nav>
    </section>
  );
}

type ActivityCardProps = {
  activity: ActivityPreview;
};

function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="flex gap-4 rounded-sm border border-neutral-300 bg-white p-4 shadow-sm">
      <div className="relative h-32 w-40 shrink-0 overflow-hidden rounded-sm bg-neutral-300">
        <Image
          src={IMAGES.tripHeroIllustration}
          alt={activity.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-5">{activity.name}</h3>
            <p className="text-xs font-medium text-black-secondary">
              {activity.location}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs font-medium text-black-secondary">From</p>
            <p className="text-lg font-semibold text-primary-600">
              {activity.currencySymbol}
              {activity.price}
            </p>
            <p className="text-[11px] font-medium text-black-secondary">
              per person
            </p>
          </div>
        </div>

        <p className="line-clamp-2 text-xs text-black-secondary">
          {activity.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-black-secondary">
            <span className="rounded-sm bg-primary-100 px-1.5 py-0.5 text-[11px] text-primary-600">
              {activity.rating.toFixed(1)} ·{" "}
              {activity.reviewCount.toLocaleString()} reviews
            </span>
            <span className="h-3 w-px bg-neutral-500/60" />
            <span>{activity.duration}</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {activity.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-300 px-2 py-0.5 text-[11px] font-medium text-black-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-end gap-2">
          <Button variant="secondary" size="sm">
            View details
          </Button>
          <Button variant="primary" size="sm">
            Add to itinerary
          </Button>
        </div>
      </div>
    </article>
  );
}


