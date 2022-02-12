import styled from 'styled-components'

interface IAccordionProps {
  isOpened?: boolean
  isShowed?: boolean
}

export const AccordionContainer = styled.div`
  border-bottom: 1px solid #e6e6e6;
`

export const AccordionHeader = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #373737;
`

export const AccordionControl = styled.div<IAccordionProps>`
  display: flex;
  align-items: center;
  margin-right: 134px;
  align-self: ${props => (props?.isOpened ? 'flex-start' : 'center')};
  & > * + * {
    margin-left: 8px;
  }
`

export const AccordionTitle = styled.p<IAccordionProps>`
  font-size: 1.125rem;
  margin: 0;
  color: ${props => (props?.isShowed ? '#373737' : '#e6e6e6')};
`

export const AccordionContentContainer = styled.div`
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
`

export const AccordionContent = styled.div`
  padding: 16px;
`

export const AccordionIconContainer = styled.div<IAccordionProps>`
  align-self: ${props => (props?.isOpened ? 'flex-start' : 'center')};
`
