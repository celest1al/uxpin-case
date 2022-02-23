import {
  ToggleContainer,
  ToggleForm,
  ToggleFormContainer,
  ToggleFormLabel,
  ToggleLabel,
} from './style'

interface ToggleProps {
  id: string
  label: string
  value: boolean
  isShowed?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void
}

const Toggle = ({
  id,
  value,
  label,
  isShowed,
  onChange,
}: ToggleProps): JSX.Element => {
  return (
    <ToggleContainer>
      <ToggleLabel isShowed={isShowed}>{label}</ToggleLabel>
      <ToggleFormContainer>
        <ToggleForm
          id={`${id}-true`}
          type="radio"
          checked={value === true}
          isShowed={isShowed}
          onChange={event => onChange(event, true)}
        />
        <ToggleFormLabel isShowed={isShowed} htmlFor={`${id}-true`}>
          True
        </ToggleFormLabel>
        <ToggleForm
          id={`${id}-false`}
          type="radio"
          checked={value === false}
          isShowed={isShowed}
          onChange={event => onChange(event, false)}
        />
        <ToggleFormLabel isShowed={isShowed} htmlFor={`${id}-false`}>
          False
        </ToggleFormLabel>
      </ToggleFormContainer>
    </ToggleContainer>
  )
}

export default Toggle
