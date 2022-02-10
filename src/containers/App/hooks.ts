import { useState } from "react";

import type { Property } from "types/property.type";
import { IProperty } from "interfaces/property.interface";

export const useCreateProperty = () => {
  const [property, setProperty] = useState<IProperty>({
    propertyName: "",
    displayName: "",
    description: "",
    propertyType: "",
    propertyControl: "",
    options: "",
    defaultValue: null,
  });
  const [isCreateMode, setIsCreateMode] = useState<boolean>(false);

  const handleCreateProperty = (type: Property, value: string | boolean) => {
    setProperty((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  return {
    property,
    handleCreateProperty,
    isCreateMode,
    setIsCreateMode,
  };
};
