import { createContext } from 'react'

export const CreatePropertyContext = createContext({
    property: {},
    handleCreateProperty: () => {},
})

export const CreatePropertyProvider = CreatePropertyContext.Provider

export const CreatePropertyConsumer = CreatePropertyContext.Consumer
