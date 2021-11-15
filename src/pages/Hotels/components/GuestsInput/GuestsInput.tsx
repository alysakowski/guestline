import { faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { GuestType } from "pages/Hotels/types";

import * as Styled from "./styled";

type Props = {
  guestType: GuestType;
  value: number;
  onChange: (value: number) => void;
};

const GuestsInput = ({ guestType, value, onChange }: Props) => {
  return (
    <Styled.GuestsInput>
      <Styled.Label>
        {guestType === GuestType.Adults ? "Adults" : "Children"}:
      </Styled.Label>

      <Styled.Input>
        <Styled.StepperIcon
          data-test-id={`${guestType}-guests-input-add`}
          icon={faUserPlus}
          onClick={() => onChange(value + 1)}
        />

        <span data-test-id={`${guestType}-guests-input-value`}>{value}</span>

        <Styled.StepperIcon
          data-test-id={`${guestType}-guests-input-remove`}
          icon={faUserMinus}
          onClick={() => onChange(value - 1)}
        />
      </Styled.Input>
    </Styled.GuestsInput>
  );
};

export default GuestsInput;
