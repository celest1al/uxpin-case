import { ComponentPreviewContainer } from "./style";

interface ComponentPreviewProps {
  render: (props: any) => JSX.Element;
}

const ComponentPreview = ({
  render,
  ...props
}: ComponentPreviewProps): JSX.Element => {
  return (
    <ComponentPreviewContainer>
      <h2>Component Preview</h2>
      {render(props)}
    </ComponentPreviewContainer>
  );
};

export default ComponentPreview;
