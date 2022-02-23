import {
  IPropertyList,
  IHandlePropertyParams,
} from 'interfaces/property.interface'

import Accordion from 'components/common/Accordion'
import PropertyForm from '../PropertyForm'
import { PropertyListContainer, PropertyFormContainer } from './style'

interface IPropertyListProps {
  propertyList: IPropertyList[]
  onToggleProperty: (event: any, id: number) => void
  onDeleteProperty: (event: any, id: number) => void
  handleChangeProperty: (params: IHandlePropertyParams) => void
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
            <PropertyFormContainer onClick={event => event.stopPropagation()}>
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
          onDeleteProperty={event => onDeleteProperty(event, property?.id)}
          onToggleProperty={event => onToggleProperty(event, property?.id)}
        />
      ))}
    </PropertyListContainer>
  )
}

export default PropertyList
