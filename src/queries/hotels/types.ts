/**
 * ENTITIES
 */
export type Hotel = {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: { code: string }[];
  telephone: string;
  email: string;
  images: { url: string }[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: {
    latitude: string;
    longitude: string;
    timezone: string;
  };
};

export type HotelRoom = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  };
  disabledAccess: boolean;
  bedConfiguration: "None" | "Twin" | "Both" | "Double" | "Single";
  images: {
    url: string;
    alt: string;
  }[];
  facilities: { code: string; name: string }[];
};

export type RatePlan = {
  id: string;
  shortDescription: string;
  longDescription: string;
  prePayment: "Reserve" | "First night" | "Deposit";
  cancellationPolicy?: {
    name: string;
    text: string;
    penalty: "Fixed";
    applicable: "Full Stay";
    amount: number;
    hour: string;
  };
};

/**
 * REQUEST RESPONSES
 */
export type HotelsResponse = Hotel[];

export type HotelRoomRatesResponse = {
  rooms: HotelRoom[];
  ratePlans: RatePlan[];
};
