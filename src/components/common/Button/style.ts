import styled, { css } from 'styled-components'

import { ButtonStyleProps } from 'interfaces/components.interface'
import { buttonColor } from 'constants/color.constant'

interface IIconButtonProps {
  isOpened?: boolean
  isDisabled?: boolean
  bgColor?: string
}

export const ButtonContainer = styled.button<ButtonStyleProps>`
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  ${props =>
    props.color &&
    css`
      color: ${buttonColor[props.color]?.color};
      background-color: ${buttonColor[props.color]?.backgroundColor};
      text-decoration: ${buttonColor[props.color]?.textDecoration};
    `}
`

export const ButtonTooltip = styled.span``

export const ButtonIconContainer = styled.button<IIconButtonProps>`
  padding: 6px;
  background: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  border: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & ${ButtonTooltip} {
    font-size: 0.75rem;
    visibility: hidden;
    width: 120px;
    top: 100%;
    left: 50%;
    margin-left: -60px;
    background-color: black;
    color: #c0c0c0;
    border-radius: 2px;
    padding: 4px 0;
    position: absolute;
    z-index: 1;
  }

  & ${ButtonTooltip}:after {
    content: ' ';
    position: absolute;
    bottom: 100%; /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }

  &:hover ${ButtonTooltip} {
    visibility: visible;
  }

  &:hover {
    cursor: pointer;
    background: #e6e6e6;
  }
`

export const Icon = styled.img`
  width: 12px;
  height: 12px;
`
