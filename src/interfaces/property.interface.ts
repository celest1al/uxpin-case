export interface IPropertySelect {
  value: string;
  label: string;
}

export interface IProperty {
  propertyName: string;
  displayName: string;
  description: string;
  propertyType: string;
  propertyControl: string;
  options: string;
  defaultValue: boolean | string | null;
}
