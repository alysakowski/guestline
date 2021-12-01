import styled from "@emotion/styled/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "shared/ui/styles";

const sizes = {
  input: {
    width: 76,
  },
};

export const GuestsInput = styled.div`
  display: flex;
  color: ${styles.colors.white};
`;

export const Label = styled.span`
  margin-right: 10px;
  font-weight: 400;
`;

export const StepperIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  user-select: none;
`;

export const Input = styled.div`
  display: flex;
  width: ${sizes.input.width}px;
  align-items: center;
  justify-content: space-between;
`;
