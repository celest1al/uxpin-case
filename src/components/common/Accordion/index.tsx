import { useState, useRef } from "react";

import PlusIcon from "components/assets/action-plus.svg";
import TrashIcon from "components/assets/trash.svg";
import CloseIcon from "components/assets/action-close.svg";
import Visible from "components/assets/visibility-visible.svg";
import {
  AccordionContainer,
  AccordionControl,
  AccordionHeader,
  AccordionTitle,
  AccordionContentContainer,
  AccordionContent,
  AccordionIcon,
  AccordionIconButton,
  ButtonTooltip,
} from "./style";

interface IAccordionProps {
  title: string;
  isDisabled?: boolean;
  onToggleProperty: () => void;
  onDeleteProperty: () => void;
  renderForm?: () => JSX.Element;
  renderContent?: () => JSX.Element;
}

const Accordion = ({
  title,
  isDisabled,
  onDeleteProperty,
  onToggleProperty,
  renderContent,
  renderForm,
}: IAccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    //@ts-ignore
    setHeight(!isOpened ? `${contentElement?.current?.scrollHeight}px` : "0px");
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => (isOpened ? null : HandleOpening())}>
        <AccordionControl isOpened={isOpened}>
          <AccordionTitle onClick={HandleOpening}>{title}</AccordionTitle>
          <AccordionIconButton onClick={onToggleProperty}>
            <AccordionIcon src={Visible} alt="visible" />
            {isOpened && <ButtonTooltip>Hide property</ButtonTooltip>}
          </AccordionIconButton>
          <AccordionIconButton onClick={onDeleteProperty}>
            <AccordionIcon src={TrashIcon} alt="trash" />
            {isOpened && <ButtonTooltip>Delete property</ButtonTooltip>}
          </AccordionIconButton>
        </AccordionControl>
        {renderForm && isOpened ? renderForm() : null}
        {isOpened ? (
          <AccordionIconButton isOpened={isOpened} onClick={HandleOpening}>
            <AccordionIcon src={CloseIcon} alt="close" />
          </AccordionIconButton>
        ) : (
          <AccordionIconButton isOpened={isOpened} onClick={HandleOpening}>
            <AccordionIcon src={PlusIcon} alt="plus" />
          </AccordionIconButton>
        )}
      </AccordionHeader>
      <AccordionContentContainer
        ref={contentElement}
        style={{ height: height }}
      >
        <AccordionContent>
          {renderContent && isOpened ? renderContent() : null}
        </AccordionContent>
      </AccordionContentContainer>
    </AccordionContainer>
  );
};

export default Accordion;
