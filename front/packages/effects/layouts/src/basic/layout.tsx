import {
  PreferencesDispatch,
  useSidebarAction,
  useSidebarSelector
} from '@sugar/@core/preferences';
import SugarLayout from 'packages/@core/ui-kit/layout-ui/src/sugar-layout';
import SugarLogo from 'packages/@core/ui-kit/shadcn-ui/src/components/logo/logo';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

const BasicLayout = (props: any) => {
  const sidebar = useSidebarSelector();
  const dispatch: PreferencesDispatch = useDispatch();
  const { setSidebarPreferences } = useSidebarAction();
  const [asideHoving, setAsideHoving] = useState(false);
  const onAsideIn = () => {
    setAsideHoving(true);
  };

  const onAsideOut = () => {
    setAsideHoving(false);
  };
  const onCollapsed = (value: boolean) => {
    dispatch(
      setSidebarPreferences({
        collapsed: value
      })
    );
  };

  const onHover = (value: boolean) => {
    dispatch(
      setSidebarPreferences({
        expandOnHover: value
      })
    );
  };

  const logo = useMemo(() => {
    var collapsed = false;
    collapsed = sidebar.collapsed;

    console.log("asideHoving:"+asideHoving)
    console.log("expandOnHover:"+sidebar.expandOnHover)
    if (sidebar.expandOnHover==false && asideHoving==false) {
      collapsed = true;
    }

    return (
      <SugarLogo
        src="https://unpkg.com/@vbenjs/static-source@0.1.6/source/logo-v1.webp"
        text="Sugar Admin"
        collapsed={collapsed}
      ></SugarLogo>
    );
  }, [sidebar.collapsed, asideHoving, sidebar.expandOnHover]);

  return (
    <SugarLayout
      logo={logo}
      sidebarCollapsed={sidebar.collapsed}
      sidebarExpandOnHover={sidebar.expandOnHover}
      sidebarAsideHoving={asideHoving}
      onAsideIn={onAsideIn}
      onAsideOut={onAsideOut}
      onCollapsed={onCollapsed}
      onHover={onHover}
    ></SugarLayout>
  );
};

export default BasicLayout;
