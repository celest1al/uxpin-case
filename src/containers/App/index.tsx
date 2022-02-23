import Button from '@mui/material/Button'

import {
  useCreateProperty,
  useUpdateProperty,
  useUpdateComponent,
} from './hooks'
import { homepageSeo } from './constant'

import Seo from 'components/common/Seo'
import Visible from 'components/assets/visibility-visible.svg'
import Hidden from 'components/assets/visibility-hidden.svg'
import Gear from 'components/assets/gear.svg'
import Header from 'components/layout/Header'
import ComponentPreview from './components/ComponentsPreview'
import CreateProperty from './components/CreateProperty'
import PropertyList from './components/PropertyList'
import { ButtonIcon } from 'components/common/Button'
import { MainLayout } from 'components/layout/MainLayout'
import { TitleContainer, Title, TitleIcon, TitleButtonContainer } from './style'

function App() {
  const { isShowedComponent, onToggleShowComponent } = useUpdateComponent()
  const { isCreateMode, newProperty, setIsCreateMode, handleCreateProperty } =
    useCreateProperty()
  const {
    newPropertyList,
    isPropertyChanged,
    handleUpdateProperty,
    onDeleteProperty,
    onToggleProperty,
    onAddProperty,
    onCancelPropertyChanged,
    onConfirmPropertyChanged,
  } = useUpdateProperty()

  return (
    <>
      <Seo {...homepageSeo} />
      <Header
        isPropertyChanged={isPropertyChanged}
        onCancelPropertyChanged={onCancelPropertyChanged}
        onConfirmPropertyChanged={onConfirmPropertyChanged}
      />
      <MainLayout>
        <TitleContainer>
          <Title>Button</Title>
          <TitleButtonContainer>
            <ButtonIcon
              iconSrc={isShowedComponent ? Visible : Hidden}
              iconAlt={isShowedComponent ? 'visible' : 'hidden'}
              onClick={onToggleShowComponent}
              tooltipText="Toggle component visibility in library"
              isShowTooltips
            />
            <ButtonIcon
              iconSrc={Gear}
              iconAlt="gear"
              onClick={() => {
                return
              }}
              tooltipText="Component settings"
              isShowTooltips
            />
          </TitleButtonContainer>
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
          onAddProperty={onAddProperty}
          property={newProperty}
          handleCreateProperty={handleCreateProperty}
          isCreateMode={isCreateMode}
          setCreateMode={(value: boolean) => setIsCreateMode(value)}
        />
        <PropertyList
          propertyList={newPropertyList}
          handleChangeProperty={handleUpdateProperty}
          onToggleProperty={onToggleProperty}
          onDeleteProperty={onDeleteProperty}
        />
      </MainLayout>
    </>
  )
}

export default App
