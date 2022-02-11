import {
  IProperty,
  IHandlePropertyParams,
} from "interfaces/property.interface";

import BluePlus from "components/assets/plus-icon-blue.svg";
import PropertyForm from '../PropertyForm'
import Button from "components/common/Button";
import {
  CreatePropertyButton,
  CreatePropertyHeader,
  CreatePropertyTitle,
  CreatePropertySection,
  CreatePropsButtonIcon,
  CreatePropertyForm,
  ButtonContainer,
} from "./style";

interface CreatePropertyProps {
  property: IProperty;
  isCreateMode: boolean;
  handleCreateProperty: (params: IHandlePropertyParams) => void;
  setCreateMode: (value: boolean) => void;
}

const CreateProperty = ({
  property,
  isCreateMode,
  handleCreateProperty,
  setCreateMode,
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
            handleChangeProperty={handleCreateProperty}
          />
          <ButtonContainer>
            <Button
              color="transparent"
              type="button"
              onClick={() => {
                setCreateMode(false);
                handleCreateProperty({
                  type: "reset",
                  value: "",
                });
              }}
            >
              Cancel
            </Button>
            <Button color="blue" type="button">
              Add
            </Button>
          </ButtonContainer>
        </CreatePropertyForm>
      ) : null}
    </CreatePropertySection>
  );
};

export default CreateProperty;
