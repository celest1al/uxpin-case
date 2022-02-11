import {
  IPropertyList,
  IHandlePropertyParams,
} from "interfaces/property.interface";

import Accordion from "components/common/Accordion";
import PropertyForm from "../PropertyForm";
import { PropertyListContainer, PropertyFormContainer } from "./style";

interface IPropertyListProps {
  propertyList: IPropertyList[];
  onToggleProperty: (id: number) => void;
  onDeleteProperty: (id: number) => void;
  handleChangeProperty: (params: IHandlePropertyParams) => void;
}

const PropertyList = ({
  propertyList,
  onToggleProperty,
  onDeleteProperty,
  handleChangeProperty,
}: IPropertyListProps) => {
  return (
    <PropertyListContainer>
      {propertyList.map((property, index) => (
        <Accordion
          key={index}
          title={property?.property?.propertyName}
          renderForm={() => (
            <PropertyFormContainer>
              <PropertyForm
                propertyId={property?.id}
                mode="update"
                property={property?.property}
                handleChangeProperty={handleChangeProperty}
              />
            </PropertyFormContainer>
          )}
          isDisabled={property?.isDisabled}
          onDeleteProperty={() => onDeleteProperty(property?.id)}
          onToggleProperty={() => onToggleProperty(property?.id)}
        />
      ))}
    </PropertyListContainer>
  );
};

export default PropertyList;
