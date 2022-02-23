import { ComponentPreviewContainer, ComponentPreviewTitle } from './style'

interface ComponentPreviewProps {
  render: (props: any) => JSX.Element
}

const ComponentPreview = ({
  render,
  ...props
}: ComponentPreviewProps): JSX.Element => {
  return (
    <ComponentPreviewContainer>
      <ComponentPreviewTitle>Component Preview</ComponentPreviewTitle>
      {render(props)}
    </ComponentPreviewContainer>
  )
}

export default ComponentPreview
