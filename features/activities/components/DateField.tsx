import { CalendarBlankIcon } from "@/components/ui/icons";
import { Label } from "@/components/ui";

type DateFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function DateField({ id, label, value, onChange }: DateFieldProps) {
  return (
    <div className="w-full">
      <Label id={id} label={label} />
      <div className="relative">
        <input
          id={id}
          type="date"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="placeholder:text-black-secondary bg-white focus:ring-primary-600/30 focus:border-primary-600 h-12 w-full rounded-sm border border-primary-1100 py-2 px-4 text-sm text-black outline-none transition-shadow placeholder:text-sm focus:border focus:bg-white focus:ring-2"
        />
        {!value && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-black-secondary">
            dd/mm/yyyy
          </span>
        )}
        <CalendarBlankIcon className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-neutral-700" />
      </div>
    </div>
  );
}
