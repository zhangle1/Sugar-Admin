import { Menu, MenuProps } from '@sugar/@core/ui-kit/menu-ui';

interface LayoutMenu extends MenuProps {}

const LayoutMenu = (props: LayoutMenu) => {
  return <Menu {...props}></Menu>;
};

export default LayoutMenu;
