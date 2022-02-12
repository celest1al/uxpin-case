import {
  ToggleContainer,
  ToggleForm,
  ToggleFormLabel,
  ToggleLabel,
} from './style'

interface ToggleProps {
  label: string
  value: boolean
  onChange: (value: boolean) => void
}

const Toggle = ({ value, label, onChange }: ToggleProps): JSX.Element => {
  return (
    <ToggleContainer>
      <ToggleLabel>{label}</ToggleLabel>
      <div>
        <ToggleForm
          id="true"
          type="radio"
          checked={value === true}
          onChange={() => onChange(true)}
        />
        <ToggleFormLabel htmlFor="true">True</ToggleFormLabel>
        <ToggleForm
          id="false"
          type="radio"
          checked={value === false}
          onChange={() => onChange(false)}
        />
        <ToggleFormLabel htmlFor="false">False</ToggleFormLabel>
      </div>
    </ToggleContainer>
  )
}

export default Toggle
