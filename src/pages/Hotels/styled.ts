import styled from "@emotion/styled/macro";
import { Rating as ReactSimpleRating } from "react-simple-star-rating";

import styles from "shared/ui/styles";

import { Hotel } from "./components/Hotel/styled";

const sizes = {
  logo: {
    width: 350,
  },
};

export const Header = styled.header`
  background: ${styles.colors.white};
  padding: 32px 0 72px;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 6px -8px;
`;

export const Hotels = styled.div`
  margin-bottom: 48px;

  ${Hotel} + ${Hotel} {
    margin-top: 34px;
  }
`;

export const LogoImage = styled.img`
  display: block;
  margin: 0 auto;
  width: ${sizes.logo.width}px;
  height: auto;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateY(-50%);
`;

export const Filters = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 4px;
  background-color: ${styles.colors.blueRibbon};
  width: 100%;
`;

export const Separator = styled.span`
  color: ${styles.colors.white};
  margin: 0 10px;
`;

export const Rating = styled(ReactSimpleRating)`
  display: flex;
  margin-right: 24px;
`;
