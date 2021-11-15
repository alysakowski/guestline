import { GuestType } from "pages/Hotels/types";
import { HotelRoom, Hotel, HotelsResponse } from "queries/hotels";

type FilterValues = {
  adults: number;
  children: number;
};

export const selectHotel =
  (hotelId: string) =>
  (hotels: HotelsResponse): Hotel | undefined => {
    const hotel = hotels.find((hotel: Hotel) => hotel.id === hotelId);

    return hotel;
  };

export const filterRoomsByGuestAmount = (
  hotelRooms: HotelRoom[] | undefined,
  filterValues: FilterValues
) => {
  if (!hotelRooms) {
    return [];
  }

  const { adults, children } = filterValues;

  const hotelRoomsWithMatchingGuests = hotelRooms.filter(
    (room: HotelRoom) =>
      adults <= room.occupancy.maxAdults &&
      children <= room.occupancy.maxChildren
  );

  return hotelRoomsWithMatchingGuests;
};

export const getHotelRoomsMaxOccupancy = (
  hotelRooms: HotelRoom[] | undefined,
  guestType: GuestType
) =>
  hotelRooms
    ? Math.max(
        ...hotelRooms.map((room) =>
          guestType === GuestType.Adults
            ? room.occupancy.maxAdults
            : room.occupancy.maxChildren
        )
      )
    : 0;
