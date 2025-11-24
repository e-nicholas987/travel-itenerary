import type { FilterOption } from "@/features/activities/types";

import { FilterPill } from "./FilterPill";

type FilterGroupProps = {
  label: string;
  options: FilterOption[];
  selected: string[];
  onToggle: (value: string) => void;
};

export function FilterGroup({
  label,
  options,
  selected,
  onToggle,
}: FilterGroupProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-xs font-medium leading-8 text-black-secondary">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <FilterPill
            key={option.value}
            label={option.label}
            isActive={selected.includes(option.value)}
            onClick={() => onToggle(option.value)}
          />
        ))}
      </div>
    </fieldset>
  );
}


