import { PreferencesDispatch, useSidebarAction, useSidebarSelector } from '@sugar/@core/preferences';
import SugarLayout from 'packages/@core/ui-kit/layout-ui/src/sugar-layout';
import SugarLogo from 'packages/@core/ui-kit/shadcn-ui/src/components/logo/logo';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const BasicLayout = (props: any) => {
  const sidebar = useSidebarSelector();
  const dispatch: PreferencesDispatch= useDispatch()
  const {setSidebarPreferences}=useSidebarAction()
  const onCollapsed=(value:boolean)=>{
      dispatch(setSidebarPreferences({
        collapsed:value
      }))
  }

  const logo = useMemo(() => {
    return (
      <SugarLogo
        src="https://unpkg.com/@vbenjs/static-source@0.1.6/source/logo-v1.webp"
        text="Sugar Admin"
        collapsed={sidebar.collapsed}
      ></SugarLogo>
    );
  }, [sidebar.collapsed]);

  return <SugarLayout logo={logo}
        sidebarCollapsed={sidebar.collapsed}
        onCollapsed={onCollapsed}
  ></SugarLayout>;
};

export default BasicLayout;
