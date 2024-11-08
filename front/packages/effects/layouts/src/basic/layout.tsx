import {
  PreferencesDispatch,
  useSidebarAction,
  useSidebarSelector
} from '@sugar/@core/preferences';
import SugarLayout from 'packages/@core/ui-kit/layout-ui/src/sugar-layout';
import SugarLogo from 'packages/@core/ui-kit/shadcn-ui/src/components/logo/logo';
import { useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import LayoutMenu from './menu/menu';
import { findPath, useMockData } from '../hooks/useMockData';
import { LayoutHeader } from './header/header';
import { useNavigate } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from 'packages/@core/ui-kit/shadcn-ui/src/components/breadcrumb';
import BreadCrumbWrapper from './breadcrumb/breadcrumb-wapper';
import GlobaSearch from '../widgets/global-search/global-search';

const BasicLayout = (props: any) => {
  const sidebar = useSidebarSelector();
  const dispatch: PreferencesDispatch = useDispatch();
  const { setSidebarPreferences } = useSidebarAction();
  const [asideHoving, setAsideHoving] = useState(false);

  const menuRef = useRef();
  const navigate = useNavigate();

  const handleChangeKey = (path: string, targetKey: string) => {
    navigate(path);
    menuRef.current.setActiveKey(targetKey); // 替换 'desiredKey' 为你想设置的 key
  };

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

    if (sidebar.expandOnHover == false && asideHoving == false) {
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

  const { menuItems } = useMockData();

  const handlerMenuChange = (key: string) => {
    const routeKey = findPath(menuItems, key);
    navigate(routeKey);
  };

  const menu = useMemo(() => {
    var collapsed = false;
    if (sidebar.collapsed) {
      collapsed = true;
    }
    if (!asideHoving && !sidebar.expandOnHover) {
      collapsed = true;
    }

    return (
      <LayoutMenu
        items={menuItems}
        ref={menuRef}
        collapsed={collapsed}
        onMenuChange={handlerMenuChange}
      ></LayoutMenu>
    );
  }, [
    menuItems,
    sidebar.collapsed,
    asideHoving,
    sidebar.expandOnHover,
    menuRef.current
  ]);

  const header = useMemo(() => {
    const breadcrumbComponent = (
      <BreadCrumbWrapper onItemClick={handleChangeKey}></BreadCrumbWrapper>
    );

    const globalSearch = <GlobaSearch></GlobaSearch>;

    return (
      <LayoutHeader
        breadcrumb={breadcrumbComponent}
        globalSearch={globalSearch}
      ></LayoutHeader>
    );
  }, [handleChangeKey]);

  return (
    <SugarLayout
      logo={logo}
      header={header}
      menu={menu}
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
