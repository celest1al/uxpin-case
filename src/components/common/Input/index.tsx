import {
  InputContainer,
  InputForm,
  InputLabel,
  InputDescription,
} from './style'

interface InputProps {
  id: string
  label: string
  value?: string
  type?: string
  description?: string
  isShowed?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

const Input = ({
  id,
  label,
  value,
  description,
  type = 'text',
  onBlur,
  onChange,
  isShowed
}: InputProps): JSX.Element => {
  return (
    <InputContainer isShowed={isShowed}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputForm
        type={type}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        isShowed={isShowed}
      />
      {description ? <InputDescription>{description}</InputDescription> : null}
    </InputContainer>
  )
}

export default Input
