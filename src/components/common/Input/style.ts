import styled from 'styled-components'

interface IInputProps {
  isShowed?: boolean
}

export const InputContainer = styled.div<IInputProps>`
  color: ${props => (props.isShowed ? '#5e5e5e' : '#e6e6e6')};
  font-size: 0.875rem;
`

export const InputLabel = styled.label`
  margin-right: 16px;
`

export const InputForm = styled.input<IInputProps>`
  border: none;
  border-bottom: 1px solid #e6e6e6;
  outline: none;
  color: ${props => (props.isShowed ? '#5e5e5e' : '#e6e6e6')};

  &:focus {
    border-bottom: 1px solid #1976d2;
  }
`

export const InputDescription = styled.p`
  margin: 0;
  margin-top: 2px;
  font-size: 0.75rem;
`
