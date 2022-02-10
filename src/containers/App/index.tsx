import Button from "@mui/material/Button";

import { useCreateProperty } from "./hooks";

import visibilityOn from "components/assets/visibility-visible.svg";
import Gear from "components/assets/gear.svg";
import Header from "components/layout/Header";
import ComponentPreview from "./components/ComponentsPreview";
import CreateProperty from "./components/CreateProperty";
import { MainLayout } from "components/layout/MainLayout";
import { TitleContainer, Title, TitleIcon } from "./style";

function App() {
  const { isCreateMode, property, setIsCreateMode, handleCreateProperty } =
    useCreateProperty();

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
          property={property}
          handleCreateProperty={handleCreateProperty}
          isCreateMode={isCreateMode}
          setCreateMode={(value: boolean) => setIsCreateMode(value)}
        />
      </MainLayout>
    </>
  );
}

export default App;
