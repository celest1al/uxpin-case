import styled from 'styled-components'

interface ISelectProps {
  width?: string
  isShowed?: boolean
}

export const SelectContainer = styled.div<ISelectProps>`
  font-size: 0.875rem;
  color: ${props => (props.isShowed ? '#5e5e5e' : '#e6e6e6')};
`

export const SelectLabel = styled.label`
  margin-right: 16px;
`

export const SelectForm = styled.select<ISelectProps>`
  border: none;
  border-bottom: 1px solid #e6e6e6;
  background: transparent;
  width: ${props => props.width};
  color: ${props => (props.isShowed ? '#5e5e5e' : '#e6e6e6')};
`

export const SelectDescription = styled.p`
  margin: 0;
  margin-top: 2px;
  font-size: 0.75rem;
`
