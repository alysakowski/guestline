import { useMemo } from "react";
import ShowMoreText from "react-show-more-text";
import { RatingView } from "react-simple-star-rating";
import SimpleImageSlider from "react-simple-image-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faUser } from "@fortawesome/free-regular-svg-icons";

import styles from "shared/ui/styles";
import * as SharedStyled from "shared/ui/styled";
import { GuestType } from "pages/Hotels/types";
import {
  useHotelRoomRatesQuery,
  useHotelsQuery,
  HotelRoom,
} from "queries/hotels";

import * as Styled from "./styled";
import {
  selectHotel,
  filterRoomsByGuestAmount,
  getHotelRoomsMaxOccupancy,
} from "./helpers";

type Props = {
  adults: number;
  children: number;
  hotelId: string;
};

const Hotel = ({ adults, children, hotelId }: Props) => {
  const { data: hotelRoomRates } = useHotelRoomRatesQuery(hotelId);
  const { data: hotel } = useHotelsQuery(selectHotel(hotelId));

  const filteredHotelRooms = useMemo(
    () => filterRoomsByGuestAmount(hotelRoomRates?.rooms, { adults, children }),
    [hotelRoomRates?.rooms, adults, children]
  );
  const maxCapacityOfAdults = useMemo(
    () => getHotelRoomsMaxOccupancy(hotelRoomRates?.rooms, GuestType.Adults),
    [hotelRoomRates?.rooms]
  );
  const maxCapacityOfChildren = useMemo(
    () => getHotelRoomsMaxOccupancy(hotelRoomRates?.rooms, GuestType.Children),
    [hotelRoomRates?.rooms]
  );

  if (!hotel) {
    return null;
  }

  return (
    <Styled.Hotel data-test-id="hotel">
      <Styled.HotelDetailsWrapper>
        <Styled.HotelBaseInfoWrapper>
          <SimpleImageSlider
            images={hotel.images}
            width={Styled.sizes.image.width}
            height={Styled.sizes.image.height}
            navStyle={2}
            navMargin={10}
            navSize={30}
            showNavs={hotel.images.length > 1}
            showBullets={false}
          />

          <Styled.HotelBaseInfo>
            <SharedStyled.H3>{hotel.name}</SharedStyled.H3>

            <SharedStyled.P1>{hotel.address1}</SharedStyled.P1>

            <SharedStyled.P1>{hotel.address2}</SharedStyled.P1>
          </Styled.HotelBaseInfo>
        </Styled.HotelBaseInfoWrapper>

        <RatingView
          ratingValue={Number(hotel.starRating)}
          fillColor={styles.colors.gold}
          emptyColor={styles.colors.gallery}
        />
      </Styled.HotelDetailsWrapper>

      {filteredHotelRooms && filteredHotelRooms.length > 0 ? (
        filteredHotelRooms.map((hotelRoom: HotelRoom) => (
          <Styled.HotelRoomsWrapper
            key={hotelRoom.id}
            data-test-id="hotel-rooms"
          >
            <Styled.HotelRoomBaseInfoWrapper>
              <SharedStyled.H4>{hotelRoom.name}</SharedStyled.H4>

              <Styled.Guest>
                <SharedStyled.P1>
                  Adults: {"  "}
                  {hotelRoom.occupancy.maxAdults
                    ? [...Array(hotelRoom.occupancy.maxAdults).keys()].map(
                        (_, index) => (
                          <FontAwesomeIcon key={index} icon={faUser} />
                        )
                      )
                    : "0"}
                </SharedStyled.P1>

                <SharedStyled.P1>
                  Children: {"  "}
                  {hotelRoom.occupancy.maxChildren > 0
                    ? [...Array(hotelRoom.occupancy.maxChildren).keys()].map(
                        (_, index) => (
                          <FontAwesomeIcon key={index} icon={faUser} />
                        )
                      )
                    : "0"}
                </SharedStyled.P1>
              </Styled.Guest>
            </Styled.HotelRoomBaseInfoWrapper>

            <Styled.HotelRoomDescription>
              <ShowMoreText anchorClass="show-more-button">
                {hotelRoom.longDescription}
              </ShowMoreText>
            </Styled.HotelRoomDescription>
          </Styled.HotelRoomsWrapper>
        ))
      ) : (
        <Styled.HotelRoomsWrapper data-test-id="hotel-rooms-empty">
          <span>
            <FontAwesomeIcon icon={faFrown} />

            <Styled.EmptyRooms>
              Oh crap... This hotel doesn't have rooms matching your criteria -
              max adults (
              <Styled.MaxCapacity data-test-id="max-adults-room-capacity">
                {maxCapacityOfAdults}
              </Styled.MaxCapacity>
              ), max children (
              <Styled.MaxCapacity data-test-id="max-children-room-capacity">
                {maxCapacityOfChildren}
              </Styled.MaxCapacity>
              ). Please change number of guests.
            </Styled.EmptyRooms>
          </span>
        </Styled.HotelRoomsWrapper>
      )}
    </Styled.Hotel>
  );
};

export default Hotel;
