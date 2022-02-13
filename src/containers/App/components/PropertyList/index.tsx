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
                isShowed={property?.isShowed}
                property={property?.property}
                handleChangeProperty={handleChangeProperty}
              />
            </PropertyFormContainer>
          )}
          isShowed={property?.isShowed}
          onDeleteProperty={() => onDeleteProperty(property?.id)}
          onToggleProperty={() => onToggleProperty(property?.id)}
        />
      ))}
    </PropertyListContainer>
  );
};

export default PropertyList;
