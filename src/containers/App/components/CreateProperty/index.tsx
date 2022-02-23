import { IProperty, IHandlePropertyParams } from 'interfaces/property.interface'

import BluePlus from 'components/assets/plus-icon-blue.svg'
import PropertyForm from '../PropertyForm'
import { Button } from 'components/common/Button'
import {
  CreatePropertyButton,
  CreatePropertyHeader,
  CreatePropertyTitle,
  CreatePropertySection,
  CreatePropsButtonIcon,
  CreatePropertyForm,
  ButtonContainer,
} from './style'

interface CreatePropertyProps {
  property: IProperty
  isCreateMode: boolean
  onAddProperty: (property: IProperty) => void
  handleCreateProperty: (params: IHandlePropertyParams) => void
  setCreateMode: (value: boolean) => void
}

const CreateProperty = ({
  property,
  isCreateMode,
  handleCreateProperty,
  setCreateMode,
  onAddProperty,
}: CreatePropertyProps): JSX.Element => {
  return (
    <CreatePropertySection>
      <CreatePropertyHeader>
        <CreatePropertyTitle>Properties</CreatePropertyTitle>
        <CreatePropertyButton onClick={() => setCreateMode(true)}>
          <CreatePropsButtonIcon src={BluePlus} alt="plus" />
          Add new property
        </CreatePropertyButton>
      </CreatePropertyHeader>
      {isCreateMode ? (
        <CreatePropertyForm>
          <PropertyForm
            mode="create"
            property={property}
            isShowed
            handleChangeProperty={handleCreateProperty}
          />
          <ButtonContainer>
            <Button
              color="transparent"
              type="button"
              onClick={() => {
                setCreateMode(false)
                handleCreateProperty({
                  type: 'reset',
                  value: '',
                })
              }}
            >
              Cancel
            </Button>
            <Button
              color="blue"
              type="button"
              onClick={() => {
                setCreateMode(false)
                onAddProperty(property)
                handleCreateProperty({
                  type: 'reset',
                  value: '',
                })
              }}
            >
              Add
            </Button>
          </ButtonContainer>
        </CreatePropertyForm>
      ) : null}
    </CreatePropertySection>
  )
}

export default CreateProperty
