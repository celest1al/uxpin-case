import styled, { css } from "styled-components";

import { ButtonStyleProps } from "../../../interfaces/components.interface";
import { buttonColor } from "../../../constants/color.constant";

export const ButtonContainer = styled.button<ButtonStyleProps>`
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      color: ${buttonColor[props.color]?.color};
      background-color: ${buttonColor[props.color]?.backgroundColor};
      text-decoration: ${buttonColor[props.color]?.textDecoration};
    `}
`;
