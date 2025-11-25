import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks";

type UseItineraryStorageOptions<TItem> = {
  storageKey: string;
  getId: (item: TItem) => string | number;
};

export const useItineraryStorage = <TItem>({
  storageKey,
  getId,
}: UseItineraryStorageOptions<TItem>) => {
  const { getItem, setItem } = useLocalStorage();
  const [items, setItems] = useState<TItem[]>([]);

  useEffect(() => {
    const stored = getItem<TItem[]>(storageKey);

    if (Array.isArray(stored)) {
      setTimeout(() => {
        setItems(stored);
      });
    }
  }, [getItem, storageKey]);

  const removeFromItinerary = (id: string | number) => {
    const updated = items.filter((item) => getId(item) !== id);

    setItems(updated);
    setItem(storageKey, updated);
  };

  return {
    items,
    removeFromItinerary,
  };
};
