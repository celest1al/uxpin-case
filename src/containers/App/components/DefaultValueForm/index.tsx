import type { Property } from "types/property.type";
import { IHandlePropertyParams } from "interfaces/property.interface";

import Toggle from "components/common/Toggle";
import Select from "components/common/Select";
import Textarea from "components/common/Textarea";

interface IDefaultValueFormProps {
  id: string;
  options?: string;
  propertyType?: string;
  propertyId?: number;
  defaultValue: boolean | string | null;
  handleCreateProperty: (params: IHandlePropertyParams) => void;
}

const DefaultValueForm = ({
  id,
  propertyType,
  propertyId,
  options,
  handleCreateProperty,
  defaultValue,
}: IDefaultValueFormProps): JSX.Element => {
  switch (propertyType) {
    case "boolean":
      return (
        <Toggle
          label="Default value"
          value={Boolean(defaultValue) ?? false}
          onChange={(value) =>
            handleCreateProperty({
              type: "defaultValue",
              id: propertyId ?? 0,
              value,
            })
          }
        />
      );
    case "oneof":
      return (
        <Select
          id={id}
          label="Default value"
          options={
            options?.split(",").map((option) => {
              return {
                label: option,
                value: option,
              };
            }) || []
          }
          value={String(defaultValue)}
          selectFormWidth="118px"
          onChange={(event) =>
            handleCreateProperty({
              type: "defaultValue",
              id: propertyId ?? 0,
              value: event?.target?.value,
            })
          }
        />
      );
    case "node":
      return (
        <Textarea
          id={id}
          label="Default value"
          textareaWidth="500px"
          value={String(defaultValue) ?? ""}
          onChange={(event) =>
            handleCreateProperty({
              type: "defaultValue",
              id: propertyId ?? 0,
              value: event?.target?.value,
            })
          }
        />
      );
    default:
      return <></>;
  }
};

export default DefaultValueForm;
