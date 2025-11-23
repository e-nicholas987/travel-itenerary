import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  containerClassName?: string;
  label?: string;
  error?: string;
}

export default function InputField({
  label,
  id,
  containerClassName,
  ...props
}: InputProps) {
  return (
    <div className={cn("w-full h-14", containerClassName)}>
      <label
        className={cn("text-xs block font-medium leading-8", {
          "sr-only": !label,
        })}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full rounded-sm bg-neutral-300 py-2 pl-11 pr-4 text-black outline-none transition-shadow placeholder:text-sm focus:border focus:bg-white focus:ring-2"
      />
    </div>
  );
}
