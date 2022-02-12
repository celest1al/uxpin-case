import { useState, useRef } from 'react'

import PlusIcon from 'components/assets/action-plus.svg'
import TrashIcon from 'components/assets/trash.svg'
import CloseIcon from 'components/assets/action-close.svg'
import Visible from 'components/assets/visibility-visible.svg'
import Hidden from 'components/assets/visibility-hidden.svg'
import { ButtonIcon } from 'components/common/Button'
import {
  AccordionContainer,
  AccordionControl,
  AccordionHeader,
  AccordionTitle,
  AccordionContentContainer,
  AccordionContent,
  AccordionIconContainer,
} from './style'

interface IAccordionProps {
  title: string
  isShowed?: boolean
  onToggleProperty: () => void
  onDeleteProperty: () => void
  renderForm?: () => JSX.Element
  renderContent?: () => JSX.Element
}

const Accordion = ({
  title,
  isShowed,
  onDeleteProperty,
  onToggleProperty,
  renderContent,
  renderForm,
}: IAccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false)
  const [height, setHeight] = useState<string>('0px')
  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    //@ts-ignore
    setHeight(!isOpened ? `${contentElement?.current?.scrollHeight}px` : '0px')
  }

  return (
    <AccordionContainer>
      <AccordionHeader>
        <AccordionControl isOpened={isOpened}>
          <AccordionTitle isShowed={isShowed} onClick={HandleOpening}>
            {title}
          </AccordionTitle>
          {isShowed ? (
            <AccordionIconContainer isOpened={isOpened}>
              <ButtonIcon
                iconSrc={Visible}
                iconAlt="visible"
                onClick={onToggleProperty}
                tooltipText="Hide property"
                isShowTooltips={isOpened}
              />
            </AccordionIconContainer>
          ) : (
            <AccordionIconContainer isOpened={isOpened}>
              <ButtonIcon
                iconSrc={Hidden}
                iconAlt="hidden"
                onClick={onToggleProperty}
                tooltipText="Show property"
                isShowTooltips={isOpened}
              />
            </AccordionIconContainer>
          )}
          <AccordionIconContainer isOpened={isOpened}>
            <ButtonIcon
              iconSrc={TrashIcon}
              iconAlt="trash"
              onClick={onDeleteProperty}
              tooltipText="Delete property"
              isShowTooltips={isOpened}
            />
          </AccordionIconContainer>
        </AccordionControl>
        {renderForm && isOpened ? renderForm() : null}
        {isOpened ? (
          <AccordionIconContainer isOpened={isOpened}>
            <ButtonIcon
              iconSrc={CloseIcon}
              iconAlt="close"
              onClick={HandleOpening}
            />
          </AccordionIconContainer>
        ) : (
          <AccordionIconContainer isOpened={isOpened}>
            <ButtonIcon
              iconSrc={PlusIcon}
              iconAlt="plus"
              onClick={HandleOpening}
            />
          </AccordionIconContainer>
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
  )
}

export default Accordion
