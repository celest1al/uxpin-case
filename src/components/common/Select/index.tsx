import {
  SelectContainer,
  SelectLabel,
  SelectForm,
  SelectDescription,
} from './style'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  id: string
  label: string
  value: string
  description?: string
  options: Option[]
  selectFormWidth?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({
  id,
  label,
  value,
  description,
  options,
  selectFormWidth,
  onChange,
}: SelectProps): JSX.Element => {
  return (
    <SelectContainer>
      <SelectLabel htmlFor={id}>{label}</SelectLabel>
      <SelectForm
        id={id}
        value={value}
        onChange={onChange}
        width={selectFormWidth}
      >
        {options?.map((option: Option, index: number) => (
          <option key={`${option?.value}-${index}`} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </SelectForm>
      {description ? (
        <SelectDescription>{description}</SelectDescription>
      ) : null}
    </SelectContainer>
  )
}

export default Select
