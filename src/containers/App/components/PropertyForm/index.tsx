import {
  IProperty,
  IHandlePropertyParams,
} from "interfaces/property.interface";
import { propertyTypeList, propertyControlList } from "constants/form.constant";

import Input from "components/common/Input";
import Textarea from "components/common/Textarea";
import Select from "components/common/Select";
import DefaultValueForm from "../DefaultValueForm";

interface IPropertyFormProps {
  propertyId?: number;
  mode: "update" | "create";
  property: IProperty;
  handleChangeProperty: (params: IHandlePropertyParams) => void;
}

const PropertyForm = ({
  propertyId,
  mode,
  property,
  handleChangeProperty,
}: IPropertyFormProps) => {
  return (
    <>
      <Input
        id={`${mode}_property-property_name`}
        label="Property name"
        description="(name of the property given in code)"
        value={property?.propertyName}
        onChange={(event) =>
          handleChangeProperty({
            type: "propertyName",
            id: propertyId ?? 0,
            value: event?.target?.value,
          })
        }
      />
      <Input
        id={`${mode}_property-display_name`}
        label="Display name"
        value={property?.displayName}
        onChange={(event) =>
          handleChangeProperty({
            type: "displayName",
            id: propertyId ?? 0,
            value: event?.target?.value,
          })
        }
      />
      <Textarea
        id={`${mode}_property-description`}
        label="Description"
        textareaWidth="500px"
        value={property?.description}
        onChange={(event) =>
          handleChangeProperty({
            type: "description",
            id: propertyId ?? 0,
            value: event?.target?.value,
          })
        }
      />
      <Select
        id={`${mode}_property-property_type`}
        label="Property type"
        options={propertyTypeList}
        value={property?.propertyType}
        selectFormWidth="118px"
        onChange={(event) =>
          handleChangeProperty({
            type: "propertyType",
            value: event?.target?.value,
          })
        }
      />
      {propertyControlList[property?.propertyType] && (
        <Select
          id={`${mode}_property-property_control`}
          label="Property control"
          options={propertyControlList[property?.propertyType]}
          value={property?.propertyControl}
          selectFormWidth="118px"
          onChange={(event) =>
            handleChangeProperty({
              type: "propertyControl",
              id: propertyId ?? 0,
              value: event?.target?.value,
            })
          }
        />
      )}
      {property?.propertyType === "oneof" && (
        <Textarea
          id={`${mode}_property-oneof_values`}
          label="Options"
          textareaWidth="500px"
          value={property?.options}
          description="(list options separared by comma)"
          onChange={(event) =>
            handleChangeProperty({
              type: "options",
              id: propertyId ?? 0,
              value: event?.target?.value,
            })
          }
        />
      )}
      {property?.propertyType && (
        <DefaultValueForm
          id={`${mode}_property-default_value`}
          propertyId={propertyId}
          defaultValue={property?.defaultValue}
          propertyType={property?.propertyType}
          options={property?.options}
          handleCreateProperty={handleChangeProperty}
        />
      )}
    </>
  );
};

export default PropertyForm;
