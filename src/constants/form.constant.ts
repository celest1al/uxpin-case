import { IPropertySelect } from 'interfaces/property.interface'

type PropertyControlList = {
  [key: string]: IPropertySelect[]
}

export const propertyTypeList = [
  {
    value: '',
    label: '',
  },
  {
    value: 'oneof',
    label: 'One of',
  },
  {
    value: 'node',
    label: 'Node',
  },
  {
    value: 'boolean',
    label: 'Boolean',
  },
]

export const propertyControlList: PropertyControlList = {
  oneof: [
    {
      value: 'select',
      label: 'Select',
    },
  ],
  node: [
    {
      value: 'textarea',
      label: 'Textarea',
    },
  ],
}
