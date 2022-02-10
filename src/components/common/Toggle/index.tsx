import { ToggleContainer, ToggleForm, ToggleLabel } from "./style";

interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const Toggle = ({ value, onChange }: ToggleProps): JSX.Element => {
  return (
    <ToggleContainer>
      <ToggleForm
        id="true"
        type="radio"
        checked={value === true}
        onChange={() => onChange(true)}
      />
      <ToggleLabel htmlFor="true">True</ToggleLabel>
      <ToggleForm
        id="false"
        type="radio"
        checked={value === false}
        onChange={() => onChange(false)}
      />
      <ToggleLabel htmlFor="false">False</ToggleLabel>
    </ToggleContainer>
  );
};

export default Toggle;
