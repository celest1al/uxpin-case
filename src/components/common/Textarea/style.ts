import styled from 'styled-components'

interface ITextareaProps {
  width?: string
  isShowed?: boolean
}

export const TextareaContainer = styled.div<ITextareaProps>`
  display: flex;
  flex-direction: column;
  color: ${props => (props.isShowed ? '#5e5e5e' : '#e6e6e6')};
  font-size: 0.875rem;
  max-width: ${props => props.width || '100%'};
`

export const TextareaLabel = styled.label`
  margin-bottom: 8px;
  font-size: 0.875rem;
`

export const TextareaForm = styled.textarea<ITextareaProps>`
  border: 1px solid #e6e6e6;
  resize: none;
  padding: 8px;
  font-family: 'Lato', sans-serif;
  color: ${props => (props.isShowed ? '#5e5e5e' : '#e6e6e6')};
`

export const TextareaDescription = styled.p`
  margin: 0;
  margin-top: 2px;
  font-size: 0.75rem;
`
