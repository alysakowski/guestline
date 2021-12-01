export enum HotelFilterAttribute {
  Rating = "rating",
  Adults = "adults",
  Children = "children",
}

export type HotelFilters = {
  [HotelFilterAttribute.Rating]: number;
  [HotelFilterAttribute.Adults]: number;
  [HotelFilterAttribute.Children]: number;
};

export enum GuestType {
  Adults = "adults",
  Children = "children",
}
