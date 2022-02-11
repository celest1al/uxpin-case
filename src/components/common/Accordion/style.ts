import styled from "styled-components";

interface IAccordionProps {
  isOpened?: boolean;
}

export const AccordionContainer = styled.div`
  border-bottom: 1px solid #e6e6e6;
`;

export const AccordionHeader = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #373737;
`;

export const AccordionControl = styled.div<IAccordionProps>`
  display: flex;
  align-items: center;
  margin-right: 134px;
  align-self: ${(props) => (props?.isOpened ? "flex-start" : "center")};
  & > * + * {
    margin-left: 16px;
  }
`;

export const AccordionTitle = styled.p`
  font-size: 1.125rem;
  margin: 0;
`;

export const AccordionIcon = styled.img`
  width: 12px;
  height: 12px;
`;

export const AccordionContentContainer = styled.div`
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
`;

export const AccordionContent = styled.div`
  padding: 16px;
`;

export const ButtonTooltip = styled.span``;

export const AccordionIconButton = styled.button<IAccordionProps>`
  padding: 2px 4px;
  background: transparent;
  border: none;
  align-self: ${(props) => (props?.isOpened ? "flex-start" : "center")};
  position: relative;
  display: inline-block;

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
    content: " ";
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
`;
