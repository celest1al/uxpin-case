import {
  HeaderContainer,
  HeaderContent,
  HeaderIcon,
  HeaderIconContainer,
  IconSeparator,
  Breadcrumbs,
  Crumb,
} from "./style";
import LayoutIcon from "components/assets/layout-medium-tile-outline.svg";
import { Button } from "components/common/Button";

interface IHeaderProps {
  isPropertyChanged: boolean;
  onCancelPropertyChanged: () => void;
  onConfirmPropertyChanged: () => void;
}

const Header = ({
  isPropertyChanged,
  onCancelPropertyChanged,
  onConfirmPropertyChanged,
}: IHeaderProps): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderIconContainer>
          <HeaderIcon src={LayoutIcon} alt="icon" />
        </HeaderIconContainer>
        <IconSeparator />
        <Breadcrumbs>
          <Crumb>
            <a>Material UI</a>
          </Crumb>
          <Crumb>Button</Crumb>
        </Breadcrumbs>
      </HeaderContent>
      {isPropertyChanged && (
        <HeaderContent>
          <Button onClick={onCancelPropertyChanged} color="transparent">
            Discard changes
          </Button>
          <Button onClick={onConfirmPropertyChanged} color="blue">
            Save changes
          </Button>
        </HeaderContent>
      )}
    </HeaderContainer>
  );
};

export default Header;
