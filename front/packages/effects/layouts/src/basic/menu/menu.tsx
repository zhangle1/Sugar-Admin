import { Menu, MenuProps } from '@sugar/@core/ui-kit/menu-ui';
import { forwardRef } from 'react';

interface LayoutMenu extends MenuProps {}

const LayoutMenu =forwardRef((props, ref) => {
  return <Menu ref={ref} {...props} />;
});
export default LayoutMenu;
