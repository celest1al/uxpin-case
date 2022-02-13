import {
  TextareaForm,
  TextareaLabel,
  TextareaContainer,
  TextareaDescription,
} from './style'

interface TextareaProps {
  id: string
  label: string
  value?: string
  textareaWidth?: string
  description?: string
  isShowed?: boolean
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
}

const Textarea = ({
  id,
  label,
  value,
  textareaWidth,
  description,
  onChange,
  isShowed,
  onBlur,
}: TextareaProps): JSX.Element => {
  return (
    <TextareaContainer isShowed={isShowed} width={textareaWidth}>
      <TextareaLabel htmlFor={id}>{label}</TextareaLabel>
      <TextareaForm
        isShowed={isShowed}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {description ? (
        <TextareaDescription>{description}</TextareaDescription>
      ) : null}
    </TextareaContainer>
  )
}

export default Textarea
