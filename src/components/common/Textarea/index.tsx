import { TextareaForm, TextareaLabel, TextareaContainer } from "./style";

interface TextareaProps {
  id: string;
  label: string;
  value?: string;
  textareaWidth?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  id,
  label,
  value,
  textareaWidth,
  onChange,
  onBlur,
}: TextareaProps): JSX.Element => {
  return (
    <TextareaContainer width={textareaWidth}>
      <TextareaLabel htmlFor={id}>{label}</TextareaLabel>
      <TextareaForm
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </TextareaContainer>
  );
};

export default Textarea;
