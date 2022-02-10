import {
  InputContainer,
  InputForm,
  InputLabel,
  InputDescription,
} from "./style";

interface InputProps {
  id: string;
  label: string;
  value?: string;
  type?: string;
  description?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  label,
  value,
  description,
  type = "text",
  onBlur,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputForm
        type={type}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {description ? <InputDescription>{description}</InputDescription> : null}
    </InputContainer>
  );
};

export default Input;
