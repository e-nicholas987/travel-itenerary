import { useCallback, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type UseItineraryItemOptions<TItem> = {
  storageKey: string;
  item: TItem;
  getId: (item: TItem) => string | number;
};

export const useItineraryItem = <TItem>({
  storageKey,
  item,
  getId,
}: UseItineraryItemOptions<TItem>) => {
  const { getItem, setItem } = useLocalStorage();

  const [isInItinerary, setIsInItinerary] = useState(() => {
    const stored = getItem<TItem[]>(storageKey) ?? [];

    if (!Array.isArray(stored)) return false;

    const id = getId(item);
    return stored.some((storedItem) => getId(storedItem) === id);
  });

  const toggleItinerary = useCallback(() => {
    const stored = getItem<TItem[]>(storageKey) ?? [];
    const id = getId(item);

    const exists = stored.some((storedItem) => getId(storedItem) === id);

    const updated = exists
      ? stored.filter((storedItem) => getId(storedItem) !== id)
      : [...stored, item];

    const success = setItem(storageKey, updated);

    if (success) {
      setIsInItinerary(!exists);
    }
  }, [getItem, setItem, storageKey, item, getId]);

  return { isInItinerary, toggleItinerary };
};
