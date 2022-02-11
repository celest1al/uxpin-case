import { useState } from "react";

import {
  IProperty,
  IPropertyList,
  IHandlePropertyParams,
} from "interfaces/property.interface";
import {
  defaultProperty,
  propertyListState,
} from "constants/property.constant";

export const useCreateProperty = () => {
  const [newProperty, setNewProperty] = useState<IProperty>(defaultProperty);
  const [isCreateMode, setIsCreateMode] = useState<boolean>(false);

  const handleCreateProperty = ({ type, value }: IHandlePropertyParams) => {
    if (type === "reset") {
      setNewProperty(defaultProperty);
    } else if (type === "propertyType") {
      setNewProperty((prevState) => ({
        ...prevState,
        propertyType: String(value),
        propertyControl: "",
        options: "",
        defaultValue: null,
      }));
    } else {
      setNewProperty((prevState) => ({
        ...prevState,
        [type]: value,
      }));
    }
  };

  return {
    newProperty,
    handleCreateProperty,
    isCreateMode,
    setIsCreateMode,
  };
};

export const useUpdateProperty = () => {
  const [propertyList, setPropertyList] =
    useState<IPropertyList[]>(propertyListState);

  const handleUpdateProperty = ({ type, id, value }: IHandlePropertyParams) => {
    const indexedProperty = propertyList.findIndex((item) => item?.id === id);
    let tempPropertyList = propertyList;

    if (indexedProperty < 0) {
      return;
    } else {
      if (type === "reset") {
        setPropertyList(propertyListState);
      } else if (type === "propertyType") {
        tempPropertyList[indexedProperty] = {
          ...tempPropertyList[indexedProperty],
          property: {
            ...tempPropertyList[indexedProperty]?.property,
            propertyType: String(value),
            propertyControl: "",
            options: "",
            defaultValue: null,
          },
        };

        setPropertyList([...tempPropertyList]);
      } else {
        tempPropertyList[indexedProperty] = {
          ...tempPropertyList[indexedProperty],
          property: {
            ...tempPropertyList[indexedProperty]?.property,
            [type]: value,
          },
        };
      }
    }
  };

  const onToggleProperty = (id: number) => {
    const indexedProperty = propertyList.findIndex((item) => item?.id === id);
    let tempPropertyList = propertyList;

    if (indexedProperty < 0) {
      return;
    } else {
      tempPropertyList[indexedProperty] = {
        ...tempPropertyList[indexedProperty],
        isDisabled: !tempPropertyList[indexedProperty]?.isDisabled,
      };

      setPropertyList([...tempPropertyList]);
    }
  }

  const onDeleteProperty = (id: number) => {
    const filteredPropertyList = propertyList.filter((item) => item?.id !== id);

    setPropertyList(filteredPropertyList)
  }

  const onAddProperty = () => {
    
  }

  return {
    propertyList,
    onToggleProperty,
    onDeleteProperty,
    handleUpdateProperty,
  };
};
