import {
  HeaderContainer,
  HeaderContent,
  HeaderIcon,
  HeaderIconContainer,
  IconSeparator,
  Breadcrumbs,
  Crumb,
} from "./style";
import LayoutIcon from "../../assets/layout-medium-tile-outline.svg";
import Button from "../../common/Button";

const Header = (): JSX.Element => {
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
      <HeaderContent>
        <Button color="transparent">Discard changes</Button>
        <Button color="blue">Save changes</Button>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
