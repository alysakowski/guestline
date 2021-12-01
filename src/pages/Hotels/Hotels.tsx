import { useState } from "react";

import IMGGuestlineLogo from "assets/logos/guestline.png";
import * as SharedStyled from "shared/ui/styled";
import styles from "shared/ui/styles";
import { useHotelsQuery } from "queries/hotels";

import GuestsInput from "./components/GuestsInput";
import Hotel from "./components/Hotel";
import * as Styled from "./styled";
import { GuestType, HotelFilterAttribute, HotelFilters } from "./types";
import { HOTEL_FILTERS_INIT_STATE } from "./constants";
import { selectHotelsIdsFilteredByStarsRating } from "./helpers";

const Hotels = () => {
  const [filters, setFilters] = useState<HotelFilters>(
    HOTEL_FILTERS_INIT_STATE
  );

  const { data: hotelsIds } = useHotelsQuery(
    selectHotelsIdsFilteredByStarsRating(filters)
  );

  const handleRatingChanged = (value: number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [HotelFilterAttribute.Rating]: value,
    }));
  };

  const handleGuestNumberChanged = (
    value: number,
    guestType: HotelFilterAttribute.Adults | HotelFilterAttribute.Children
  ) => {
    if (value < 0) {
      return;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      [guestType]: value,
    }));
  };

  return (
    <Styled.Hotels>
      <Styled.Header>
        <Styled.LogoImage src={IMGGuestlineLogo} alt="Guestline" />
      </Styled.Header>

      <SharedStyled.Container>
        <Styled.FilterWrapper data-test-id="hotels-filters">
          <Styled.Filters>
            <div data-test-id="stars-rating">
              <Styled.Rating
                ratingValue={filters.rating}
                fillColor={styles.colors.gold}
                emptyColor={styles.colors.gallery}
                onClick={handleRatingChanged}
              />
            </div>

            <GuestsInput
              guestType={GuestType.Adults}
              value={filters.adults}
              onChange={(value) =>
                handleGuestNumberChanged(value, HotelFilterAttribute.Adults)
              }
            />

            <Styled.Separator>|</Styled.Separator>

            <GuestsInput
              guestType={GuestType.Children}
              value={filters.children}
              onChange={(value) =>
                handleGuestNumberChanged(value, HotelFilterAttribute.Children)
              }
            />
          </Styled.Filters>
        </Styled.FilterWrapper>

        {hotelsIds &&
          hotelsIds?.length > 0 &&
          hotelsIds.map((hotelId: string) => (
            <Hotel
              key={hotelId}
              adults={filters.adults}
              children={filters.children}
              hotelId={hotelId}
            />
          ))}
      </SharedStyled.Container>
    </Styled.Hotels>
  );
};

export default Hotels;
