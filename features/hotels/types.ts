export type SearchHotelsPriceValue = {
  value: number;
  currency: string;
};

export type SearchHotelsBenefitBadge = {
  variant?: string;
  identifier?: string;
  explanation?: string;
  text?: string;
};

export type SearchHotelsPriceBreakdown = {
  grossPrice: SearchHotelsPriceValue;
  excludedPrice: SearchHotelsPriceValue;
  taxExceptions: unknown[];
  benefitBadges: SearchHotelsBenefitBadge[];
  strikethroughPrice?: SearchHotelsPriceValue;
};

export type SearchHotelsCheckTime = {
  fromTime: string;
  untilTime: string;
};

export type SearchHotelsProperty = {
  id: number;
  ufi?: number;
  name?: string;
  latitude?: number;
  longitude?: number;
  countryCode?: string;
  wishlistName?: string;
  mainPhotoId?: number;
  photoUrls?: string[];
  position?: number;
  rankingPosition?: number;
  isFirstPage?: boolean;
  isPreferred?: boolean;
  propertyClass?: number;
  accuratePropertyClass?: number;
  qualityClass?: number;
  currency?: string;
  optOutFromGalleryChanges?: number;
  reviewScore?: number;
  reviewScoreWord?: string;
  reviewCount?: number;
  checkinDate?: string;
  checkoutDate?: string;
  checkin?: SearchHotelsCheckTime;
  checkout?: SearchHotelsCheckTime;
  priceBreakdown?: SearchHotelsPriceBreakdown;
  blockIds?: string[];
};

export type SearchHotelsHotel = {
  hotel_id: number;
  accessibilityLabel: string;
  property: SearchHotelsProperty;
};

export type SearchHotelsMeta = {
  title: string;
};

export type SearchHotelsAppearComponent = {
  props: Record<string, unknown>;
};

export type SearchHotelsAppearItem = {
  id?: string;
  component?: SearchHotelsAppearComponent;
  contentUrl?: string;
};

export type SearchHotelsData = {
  hotels: SearchHotelsHotel[];
  meta: SearchHotelsMeta[];
  appear: SearchHotelsAppearItem[];
};

export type SearchHotelsResponse = {
  status: boolean;
  message: string;
  timestamp: number;
  data?: SearchHotelsData;
};
