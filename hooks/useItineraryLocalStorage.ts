import { useLocalStorage } from "./useLocalStorage";

const useItineraryLocalStorage = () => {
  const { getItem, setItem } = useLocalStorage();
  const [isInItinerary, setIsInItinerary] = useState(() => {
    const stored =
      getItem<AttractionsProduct[]>(ACTIVITIES_ITINERARY_STORAGE_KEY) ?? [];

    if (!Array.isArray(stored)) return false;

    return stored.some((item) => item.id === activity.id);
  });

  const handleToggleItinerary = () => {
    const stored =
      getItem<AttractionsProduct[]>(ACTIVITIES_ITINERARY_STORAGE_KEY) ?? [];

    const exists = stored.some((item) => item.id === activity.id);
    const updated = exists
      ? stored.filter((item) => item.id !== activity.id)
      : [...stored, activity];

    const success = setItem(ACTIVITIES_ITINERARY_STORAGE_KEY, updated);

    if (success) {
      setIsInItinerary(!exists);
    }
  };
};
