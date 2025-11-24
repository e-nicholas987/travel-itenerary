import { cn } from "@/lib/utils/cn";

type FilterPillProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function FilterPill({ label, isActive, onClick }: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        isActive
          ? "border-primary-600 bg-primary-600 text-white"
          : "border-neutral-500 bg-white text-black-secondary hover:bg-neutral-300/70",
      )}
    >
      {label}
    </button>
  );
}


