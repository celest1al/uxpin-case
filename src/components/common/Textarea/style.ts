import styled from 'styled-components'

interface TextareaContainerProps {
  width?: string
}

export const TextareaContainer = styled.div<TextareaContainerProps>`
  display: flex;
  flex-direction: column;
  color: #5e5e5e;
  font-size: 0.875rem;
  max-width: ${props => props.width || '100%'};
`

export const TextareaLabel = styled.label`
  margin-bottom: 8px;
  font-size: 0.875rem;
`

export const TextareaForm = styled.textarea`
  border: 1px solid #e6e6e6;
  resize: none;
  padding: 8px;
  color: #5e5e5e;
`

export const TextareaDescription = styled.p`
  margin: 0;
  margin-top: 2px;
  font-size: 0.75rem;
`
