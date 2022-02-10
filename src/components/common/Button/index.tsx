import type { ButtonColor } from "../../../types/components.type";

import { ButtonContainer } from "./style";

interface ButtonProps {
  color: ButtonColor;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  color = "blue",
  type = "button",
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonContainer type={type} color={color} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
