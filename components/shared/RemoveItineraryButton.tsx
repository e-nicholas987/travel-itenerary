import { XIcon } from "lucide-react";

type RemoveItineraryButtonProps = {
  onClick: () => void;
};

export default function RemoveItineraryButton({
  onClick,
}: RemoveItineraryButtonProps) {
  return (
    <button
      type="button"
      className="w-11.5 transition-colors duration-300 cursor-pointer hover:bg-red-700 hover:text-white h-full grid place-items-center bg-error-100 text-red-700"
      onClick={onClick}
    >
      <XIcon className="size-4" />
    </button>
  );
}
