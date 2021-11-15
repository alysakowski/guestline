import styled from "@emotion/styled/macro";
import { P1Typography } from "shared/ui/styled";

import styles from "shared/ui/styles";

export const sizes = {
  image: {
    width: 250,
    height: 200,
  },
};

export const Hotel = styled.div`
  background-color: ${styles.colors.white};
  border-radius: 4px;
  padding: 16px 0;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 16px -8px;
`;

export const HotelDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 16px;
`;

export const HotelBaseInfoWrapper = styled.div`
  display: flex;
`;

export const HotelBaseInfo = styled.div`
  margin-left: 16px;
`;

export const HotelRoomsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  background: ${styles.colors.seaShell};
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 4px;

  & + & {
    margin-top: 8px;
  }
`;

export const HotelRoomBaseInfoWrapper = styled.div`
  /* Align end of base room info with hotel image & include margin (16px) */
  width: calc(${sizes.image.width}px - 16px);
`;

export const Guest = styled.div`
  margin-top: 4px;

  && {
    svg {
      width: 12px;
      text-align: center;
      margin: 0 4px;
    }
  }
`;

export const HotelRoomDescription = styled.div`
  ${P1Typography}

  /* Align beginning of room description with hotel image */
  width: calc(100% - ${sizes.image.width}px);
  text-align: justify;

  .show-more-button {
    display: block;
    color: ${styles.colors.blueRibbon};
  }
`;

export const EmptyRooms = styled.span`
  margin-left: 6px;
`;

export const MaxCapacity = styled.span`
  font-weight: 500;
`;
