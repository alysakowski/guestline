import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";

import styles from "./styles";

const sizes = {
  container: {
    width: 1176,
  },
};

export const Container = styled.section`
  width: ${sizes.container.width}px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

/** TYPOGRAPHY */
export const H3Typography = css`
  font-size: ${styles.typography.fontSize.h3}px;
  line-height: ${styles.typography.lineHeight.h3}px;
  font-weight: ${styles.typography.fontWeight.h3};
`;

export const H4Typography = css`
  font-size: ${styles.typography.fontSize.h4}px;
  line-height: ${styles.typography.lineHeight.h4}px;
  font-weight: ${styles.typography.fontWeight.h4};
`;

export const P1Typography = css`
  font-size: ${styles.typography.fontSize.p1}px;
  line-height: ${styles.typography.lineHeight.p1}px;
  font-weight: ${styles.typography.fontWeight.p1};
`;

export const H3 = styled.h3`
  ${H3Typography}

  margin: 0;
`;

export const H4 = styled.h4`
  ${H4Typography}

  margin: 0;
`;

export const P1 = styled.p`
  ${P1Typography}

  margin: 0;
`;
