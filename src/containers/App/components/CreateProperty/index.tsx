import { propertyTypeList, propertyControlList } from "constants/form.constant";
import { IProperty } from "interfaces/property.interface";
import type { Property } from "types/property.type";

import BluePlus from "components/assets/plus-icon-blue.svg";
import Button from "components/common/Button";
import Input from "components/common/Input";
import Textarea from "components/common/Textarea";
import Select from "components/common/Select";
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
  handleCreateProperty: (type: Property, value: any) => void;
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
          <Input
            id="create_property-property_name"
            label="Property name"
            description="(name of the proerty given in code)"
            value={property?.propertyName}
            onChange={(event) =>
              handleCreateProperty("propertyName", event?.target?.value)
            }
          />
          <Input
            id="create_property-display_name"
            label="Display name"
            value={property?.displayName}
            onChange={(event) =>
              handleCreateProperty("displayName", event?.target?.value)
            }
          />
          <Textarea
            id="create_property-description"
            label="Description"
            textareaWidth="500px"
            value={property?.description}
            onChange={(event) =>
              handleCreateProperty("description", event?.target?.value)
            }
          />
          <Select
            id="create_property-property_type"
            label="Property type"
            options={propertyTypeList}
            value={property?.propertyType}
            selectFormWidth="118px"
            onChange={(event) =>
              handleCreateProperty("propertyType", event?.target?.value)
            }
          />
          {propertyControlList[property?.propertyType] && (
            <Select
              id="create_property-property_control"
              label="Property control"
              options={propertyControlList[property?.propertyType]}
              value={property?.propertyControl}
              selectFormWidth="118px"
              onChange={(event) =>
                handleCreateProperty("propertyControl", event?.target?.value)
              }
            />
          )}
          {property?.propertyType === "oneof" && (
            <Textarea
              id="create_property-options"
              label="Options"
              textareaWidth="500px"
              value={property?.options}
              onChange={(event) =>
                handleCreateProperty("options", event?.target?.value)
              }
            />
          )}
          <ButtonContainer>
            <Button
              color="transparent"
              type="button"
              onClick={() => setCreateMode(false)}
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
