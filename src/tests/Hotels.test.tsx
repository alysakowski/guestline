import { within, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import styles from "shared/ui/styles";
import Hotels from "pages/Hotels/Hotels";

import { render } from "./utils/render";

describe("Hotels", () => {
  let hotelsFiltersWrapper: HTMLElement;

  beforeEach(() => {
    render(<Hotels />);

    hotelsFiltersWrapper = screen.getByTestId("hotels-filters");
  });

  it("renders hotels page", () => {
    render(<Hotels />);

    expect(hotelsFiltersWrapper).toBeInTheDocument();
  });

  describe("filters", () => {
    it("adds adults guests number", () => {
      const adultsGuestsInputAdd = within(hotelsFiltersWrapper).getByTestId(
        "adults-guests-input-add"
      );
      const adultsGuestsInputValue = within(hotelsFiltersWrapper).getByTestId(
        "adults-guests-input-value"
      );

      userEvent.click(adultsGuestsInputAdd);

      expect(Number(adultsGuestsInputValue.textContent)).toEqual(1);
    });

    it("removes adults guests number", () => {
      const adultsGuestsInputAdd = within(hotelsFiltersWrapper).getByTestId(
        "adults-guests-input-add"
      );
      const adultsGuestsInputRemove = within(hotelsFiltersWrapper).getByTestId(
        "adults-guests-input-remove"
      );
      const adultsGuestsInputValue = within(hotelsFiltersWrapper).getByTestId(
        "adults-guests-input-value"
      );

      userEvent.click(adultsGuestsInputAdd);

      expect(Number(adultsGuestsInputValue.textContent)).toEqual(1);

      userEvent.click(adultsGuestsInputRemove);

      expect(Number(adultsGuestsInputValue.textContent)).toEqual(0);
    });

    it("doesn't allow to set negative adults guests number", () => {
      const adultsGuestsInputRemove = within(hotelsFiltersWrapper).getByTestId(
        "adults-guests-input-remove"
      );
      const adultsGuestsInputValue = within(hotelsFiltersWrapper).getByTestId(
        "adults-guests-input-value"
      );

      userEvent.click(adultsGuestsInputRemove);

      expect(Number(adultsGuestsInputValue.textContent)).toEqual(0);
    });

    it("adds children guests number", () => {
      const childrenGuestsInputAdd = within(hotelsFiltersWrapper).getByTestId(
        "children-guests-input-add"
      );
      const childrenGuestsInputValue = within(hotelsFiltersWrapper).getByTestId(
        "children-guests-input-value"
      );

      userEvent.click(childrenGuestsInputAdd);

      expect(Number(childrenGuestsInputValue.textContent)).toEqual(1);
    });

    it("removes children guests number", () => {
      const childrenGuestsInputAdd = within(hotelsFiltersWrapper).getByTestId(
        "children-guests-input-add"
      );
      const childrenGuestsInputRemove = within(
        hotelsFiltersWrapper
      ).getByTestId("children-guests-input-remove");
      const childrenGuestsInputValue = within(hotelsFiltersWrapper).getByTestId(
        "children-guests-input-value"
      );

      userEvent.click(childrenGuestsInputAdd);

      expect(Number(childrenGuestsInputValue.textContent)).toEqual(1);

      userEvent.click(childrenGuestsInputRemove);

      expect(Number(childrenGuestsInputValue.textContent)).toEqual(0);
    });

    it("doesn't allow to set negative children guests number", () => {
      const childrenGuestsInputRemove = within(
        hotelsFiltersWrapper
      ).getByTestId("children-guests-input-remove");
      const childrenGuestsInputValue = within(hotelsFiltersWrapper).getByTestId(
        "children-guests-input-value"
      );

      userEvent.click(childrenGuestsInputRemove);

      expect(Number(childrenGuestsInputValue.textContent)).toEqual(0);
    });

    it("changes stars rating", () => {
      const starsSVGsElements = within(hotelsFiltersWrapper)
        .getByTestId("stars-rating")
        .querySelectorAll("svg");

      expect(starsSVGsElements).toHaveLength(5);

      const [firstStar, secondStar, , fourthStar, fifthStar] =
        starsSVGsElements;

      const firstStarWrapper = firstStar.closest("span");
      const secondStarWrapper = secondStar.closest("span");
      const fourthStarWrapper = fourthStar.closest("span");
      const fifthStarWrapper = fifthStar.closest("span");

      if (fourthStarWrapper) {
        userEvent.click(fourthStarWrapper);
      }

      expect(fifthStarWrapper).toHaveStyle(`color: ${styles.colors.gallery}`);

      if (secondStarWrapper) {
        userEvent.click(secondStarWrapper);
      }

      expect(firstStarWrapper).toHaveStyle(`color: ${styles.colors.gold}`);
    });
  });

  it("renders proper list of hotels based on filters", async () => {
    render(<Hotels />);

    const starsSVGsElements = within(hotelsFiltersWrapper)
      .getByTestId("stars-rating")
      .querySelectorAll("svg");

    const [, , , , fifthStar] = starsSVGsElements;

    const fifthStarWrapper = fifthStar.closest("span");

    if (fifthStarWrapper) {
      userEvent.click(fifthStarWrapper);
    }

    const hotels = await waitFor(() => screen.getAllByTestId("hotel"));

    expect(hotels).toHaveLength(2);
  });

  it("renders proper list of hotels rooms based on filters", async () => {
    render(<Hotels />);

    const childrenGuestsInputAdd = within(hotelsFiltersWrapper).getByTestId(
      "children-guests-input-add"
    );

    userEvent.click(childrenGuestsInputAdd);
    userEvent.click(childrenGuestsInputAdd);

    const [firstHotel] = await waitFor(() => screen.getAllByTestId("hotel"));
    const hotelRooms = within(firstHotel).getAllByTestId("hotel-rooms");

    expect(hotelRooms).toHaveLength(3);
  });

  it("renders proper empty state of hotels rooms", async () => {
    render(<Hotels />);

    const childrenGuestsInputAdd = within(hotelsFiltersWrapper).getByTestId(
      "children-guests-input-add"
    );

    userEvent.click(childrenGuestsInputAdd);
    userEvent.click(childrenGuestsInputAdd);
    userEvent.click(childrenGuestsInputAdd);
    userEvent.click(childrenGuestsInputAdd);
    userEvent.click(childrenGuestsInputAdd);

    const [firstHotel] = await waitFor(() => screen.getAllByTestId("hotel"));

    const hotelRoomsEmpty =
      within(firstHotel).getAllByTestId("hotel-rooms-empty");
    const maxAdultsCapacityNumber = within(hotelRoomsEmpty[0]).getByTestId(
      "max-adults-room-capacity"
    );
    const maxChildrenCapacityNumber = within(hotelRoomsEmpty[0]).getByTestId(
      "max-children-room-capacity"
    );

    expect(hotelRoomsEmpty).toHaveLength(1);
    expect(Number(maxAdultsCapacityNumber.textContent)).toEqual(6);
    expect(Number(maxChildrenCapacityNumber.textContent)).toEqual(4);
  });
});
