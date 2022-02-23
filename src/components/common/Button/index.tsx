import type { ButtonColor } from 'types/components.type'

import {
  ButtonContainer,
  ButtonIconContainer,
  Icon,
  ButtonTooltip,
} from './style'

interface IIconButtonProps {
  iconSrc: string
  iconAlt: string
  tooltipText?: string
  isShowTooltips?: boolean
  bgColor?: string,
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
interface IButtonProps {
  color: ButtonColor
  type?: 'button' | 'submit' | 'reset' | undefined
  children: React.ReactNode
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({
  color = 'blue',
  type = 'button',
  children,
  onClick,
}: IButtonProps): JSX.Element => {
  return (
    <ButtonContainer type={type} color={color} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

const ButtonIcon = ({
  iconSrc,
  iconAlt,
  tooltipText,
  isShowTooltips,
  bgColor,
  onClick,
}: IIconButtonProps) => {
  return (
    <ButtonIconContainer bgColor={bgColor} onClick={onClick}>
      <Icon src={iconSrc} alt={iconAlt} />
      {isShowTooltips && <ButtonTooltip>{tooltipText}</ButtonTooltip>}
    </ButtonIconContainer>
  )
}

export { Button, ButtonIcon }
