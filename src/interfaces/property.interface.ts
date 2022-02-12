import type { Property } from 'types/property.type'

export interface IPropertySelect {
  value: string
  label: string
}

export interface IProperty {
  propertyName: string
  displayName: string
  description: string
  propertyType: string
  propertyControl: string
  options: string
  defaultValue: boolean | string | null
}

export interface IPropertyList {
  id: number
  isShowed: boolean
  property: IProperty
}

export interface IHandlePropertyParams {
  type: Property
  id?: number
  value: string | boolean
}
