import Button from "@mui/material/Button";

import { useCreateProperty, useUpdateProperty } from "./hooks";

import visibilityOn from "components/assets/visibility-visible.svg";
import Gear from "components/assets/gear.svg";
import Header from "components/layout/Header";
import ComponentPreview from "./components/ComponentsPreview";
import CreateProperty from "./components/CreateProperty";
import PropertyList from './components/PropertyList'
import { MainLayout } from "components/layout/MainLayout";
import { TitleContainer, Title, TitleIcon } from "./style";

function App() {
  const { isCreateMode, newProperty, setIsCreateMode, handleCreateProperty } =
    useCreateProperty();
  const { propertyList, handleUpdateProperty, onDeleteProperty, onToggleProperty} = useUpdateProperty();

  return (
    <>
      <Header />
      <MainLayout>
        <TitleContainer>
          <Title>Button</Title>
          <TitleIcon src={visibilityOn} alt="visibility" />
          <TitleIcon src={Gear} alt="gear" />
        </TitleContainer>
        <ComponentPreview
          render={() => (
            <Button
              variant="contained"
              fullWidth={true}
              size="large"
              color="primary"
            >
              Sign Up
            </Button>
          )}
        />
        <CreateProperty
          property={newProperty}
          handleCreateProperty={handleCreateProperty}
          isCreateMode={isCreateMode}
          setCreateMode={(value: boolean) => setIsCreateMode(value)}
        />
        <PropertyList
          propertyList={propertyList}
          handleChangeProperty={handleUpdateProperty}
          onToggleProperty={onToggleProperty}
          onDeleteProperty={onDeleteProperty}
        />
      </MainLayout>
    </>
  );
}

export default App;
