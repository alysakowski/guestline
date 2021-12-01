import axios from "axios";
import { useQuery } from "react-query";

import { HotelRoomRatesResponse, HotelsResponse } from "./types";

const hotelsQueryKeys = {
  all: ["hotels"] as const,

  hotelsList: () => [...hotelsQueryKeys.all, "list"] as const,

  roomRatesAll: () => [...hotelsQueryKeys.all, "room-rates"] as const,
  roomRates: (hotelId: string) =>
    [...hotelsQueryKeys.roomRatesAll(), hotelId] as const,
};

/**
 * QUERY CUSTOM FUNCTIONS
 */
const fetchHotels = async (): Promise<HotelsResponse> => {
  const response = await axios.get(
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
  );

  return response.data;
};

const fetchHotelRoomRates = async (
  hotelId: string
): Promise<HotelRoomRatesResponse> => {
  const response = await axios.get(
    `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}`
  );

  return response.data;
};

/**
 * QUERY CUSTOM HOOKS
 */
export const useHotelsQuery = <T = HotelsResponse>(
  select?: (hotels: HotelsResponse) => T
) =>
  useQuery(hotelsQueryKeys.hotelsList(), () => fetchHotels(), {
    select,
  });

export const useHotelRoomRatesQuery = <T = HotelRoomRatesResponse>(
  hotelId: string,
  select?: (hotelRoomRates: HotelRoomRatesResponse) => T
) =>
  useQuery(
    hotelsQueryKeys.roomRates(hotelId),
    () => fetchHotelRoomRates(hotelId),
    {
      select,
    }
  );
