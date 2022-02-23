import { useState, useEffect } from 'react'
import isEqual from 'lodash.isequal'

import {
  IProperty,
  IPropertyList,
  IHandlePropertyParams,
} from 'interfaces/property.interface'
import { defaultProperty, propertyListState } from 'constants/property.constant'

export const useUpdateComponent = () => {
  const [isShowedComponent, setIsShowedComponent] = useState(true)

  const onToggleShowComponent = () => {
    setIsShowedComponent(prevState => !prevState)
  }

  return {
    isShowedComponent,
    onToggleShowComponent,
  }
}

export const useCreateProperty = () => {
  const [newProperty, setNewProperty] = useState<IProperty>(defaultProperty)
  const [isCreateMode, setIsCreateMode] = useState<boolean>(false)

  const handleCreateProperty = ({ type, value }: IHandlePropertyParams) => {
    if (type === 'reset') {
      setNewProperty(defaultProperty)
    } else if (type === 'propertyType') {
      setNewProperty(prevState => ({
        ...prevState,
        propertyType: String(value),
        propertyControl: '',
        options: '',
        defaultValue: null,
      }))
    } else {
      setNewProperty(prevState => ({
        ...prevState,
        [type]: value,
      }))
    }
  }

  return {
    newProperty,
    handleCreateProperty,
    isCreateMode,
    setIsCreateMode,
  }
}

export const useUpdateProperty = () => {
  const [propertyList, setPropertyList] = useState<IPropertyList[]>([
    ...propertyListState,
  ])
  const [newPropertyList, setNewPropertyList] = useState<IPropertyList[]>([
    ...propertyListState,
  ])
  const [isPropertyChanged, setIsPropertyChanged] = useState<boolean>(false)

  useEffect(() => {
    if (isEqual(propertyList, newPropertyList)) {
      setIsPropertyChanged(false)
    } else {
      setIsPropertyChanged(true)
    }
  }, [propertyList, newPropertyList])

  const handleUpdateProperty = ({ type, id, value }: IHandlePropertyParams) => {
    const indexedProperty = newPropertyList.findIndex(item => item?.id === id)
    let tempPropertyList = newPropertyList

    if (indexedProperty < 0) {
      return
    } else {
      if (type === 'reset') {
        setNewPropertyList(propertyListState)
      } else if (type === 'propertyType') {
        tempPropertyList[indexedProperty] = {
          ...tempPropertyList[indexedProperty],
          property: {
            ...tempPropertyList[indexedProperty]?.property,
            propertyType: String(value),
            propertyControl: '',
            options: '',
            defaultValue: null,
          },
        }

        setNewPropertyList([...tempPropertyList])
      } else {
        tempPropertyList[indexedProperty] = {
          ...tempPropertyList[indexedProperty],
          property: {
            ...tempPropertyList[indexedProperty]?.property,
            [type]: value,
          },
        }

        setNewPropertyList([...tempPropertyList])
      }
    }
  }

  const onToggleProperty = (event: any, id: number) => {
    event.stopPropagation()
    const indexedProperty = newPropertyList.findIndex(item => item?.id === id)
    let tempPropertyList = newPropertyList

    if (indexedProperty < 0) {
      return
    } else {
      tempPropertyList[indexedProperty] = {
        ...tempPropertyList[indexedProperty],
        isShowed: !tempPropertyList[indexedProperty]?.isShowed,
      }

      setNewPropertyList([...tempPropertyList])
    }
  }

  const onDeleteProperty = (event: any, id: number) => {
    event.stopPropagation()
    const filteredPropertyList = newPropertyList.filter(item => item?.id !== id)

    setNewPropertyList(filteredPropertyList)
  }

  const onAddProperty = (property: IProperty) => {
    const newProperty = {
      id: propertyList.length + 1,
      property,
      isShowed: true,
    }

    setNewPropertyList(prevState => [...prevState, newProperty])
  }

  const onCancelPropertyChanged = () => {
    setNewPropertyList(propertyList)
  }

  const onConfirmPropertyChanged = () => {
    setPropertyList(newPropertyList)
  }

  return {
    newPropertyList,
    isPropertyChanged,
    onToggleProperty,
    onDeleteProperty,
    onAddProperty,
    onCancelPropertyChanged,
    onConfirmPropertyChanged,
    handleUpdateProperty,
  }
}
