import { HotelsResponse, Hotel } from "queries/hotels";

import { HotelFilters } from "./types";

export const selectHotelsIdsFilteredByStarsRating =
  (filters: HotelFilters) =>
  (hotels: HotelsResponse): string[] => {
    const hotelsWithMatchingRating = hotels.filter(
      (hotel: Hotel) => Number(hotel.starRating) >= filters.rating
    );

    return hotelsWithMatchingRating.map((hotel: Hotel) => hotel.id);
  };
