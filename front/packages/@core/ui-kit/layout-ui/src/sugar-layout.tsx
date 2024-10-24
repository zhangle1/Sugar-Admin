import React, { MouseEventHandler, ReactNode, useMemo, useState } from 'react';
import styled from 'styled-components';
import LayoutSidebar from './components/layout-sidebar';
import withDefaultProps from 'packages/@core/base/shared/src/utils/withDefault';
import LayoutHeader from './components/layout-header';
import { MenuIcon, SugarButton } from '@sugar/@core/ui-kit/shadcn-ui';
import { Outlet } from 'react-router-dom';

interface Props {
  logo?: ReactNode;
  header?: ReactNode;
  menu?: ReactNode;
  sidebarEnableState?: boolean;
  headerVisible?: boolean;
  headerHeight: number;
  tabbarEnable?: boolean;
  children?: ReactNode;
  footerEnable?: boolean;
  maskVisible?: boolean;
  sidebarExtraCollapsedWidth?: number;
  onCollapsed: Function;
  sidebarWith?: number;
  sidebarCollapsed: boolean;
  sidebarExpandOnHover: boolean;
  sidebarHidden?: boolean;
  sideCollapseWidth?: number;
  onHover: Function;
  sidebarAsideHoving: boolean;
  onAsideIn: MouseEventHandler | undefined;
  onAsideOut: MouseEventHandler | undefined;
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const Content = styled.div<{ sidebarWidth: number }>`
  width: ${p => `calc(100% - ${p.sidebarWidth}px)`};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease-in;
`;

const HeaderWrapper = styled.div<{ scrollY: number }>`
  overflow: hidden;
  transition: all 0.2s;
  box-shadow: ${props =>
    props.scrollY > 20 ? '0 16px 24px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const LayoutContent = styled.main`
  /* Add your content styles here */
`;

const LayoutFooter = styled.footer`
  /* Add your footer styles here */
`;

const Mask = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: background-color 0.2s;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SugarLayout = (props: Props) => {
  const mergeProps = useMemo(
    () =>
      withDefaultProps(
        {
          sidebarEnableState: true,
          sidebarExtraCollapsedWidth: 60,
          sidebarWith: 230,
          sidebarHidden: false,
          sideCollapseWidth: 60,
          headerVisible: true
        },
        props
      ),
    [props]
  );

  const getSidebarWith = useMemo(() => {
    let width = 0;

    if (mergeProps?.sidebarCollapsed) {
      width = mergeProps.sideCollapseWidth ?? 0;
    } else {
      width = mergeProps.sidebarWith ?? 0;
    }

    if (!mergeProps?.sidebarAsideHoving && !mergeProps?.sidebarExpandOnHover) {
      width = mergeProps.sideCollapseWidth ?? 0;
    } else {
    }

    return width;
  }, [mergeProps, mergeProps?.sidebarAsideHoving]);

  const getSidebarExtraWidth = useMemo(() => {
    var width = mergeProps.sidebarCollapsed
      ? mergeProps.sidebarExtraCollapsedWidth
      : mergeProps?.sidebarWith;
    width = width ?? 0;

    if (!mergeProps?.sidebarAsideHoving && !mergeProps?.sidebarExpandOnHover) {
      width = mergeProps.sideCollapseWidth ?? 0;
    } else {
    }

    return width;
  }, [mergeProps, mergeProps?.sidebarAsideHoving]);

  const headerLogo = useMemo(() => {
    return (
      <SugarButton
        variant="ghost-header"
        style={{
          borderRadius: '8px',
          height: '2rem',
          width: '2rem',
          marginRight: '0.25rem'
        }}
        size="icon"
      >
        <MenuIcon></MenuIcon>
      </SugarButton>
    );
  }, []);

  return (
    <Container>
      {mergeProps?.sidebarEnableState && (
        <LayoutSidebar
          logo={mergeProps?.logo}
          menu={mergeProps?.menu}
          width={getSidebarWith}
          extraWidth={getSidebarExtraWidth}
          collapsed={mergeProps.sidebarCollapsed}
          onCollapsed={mergeProps.onCollapsed}
          expandonHover={mergeProps.sidebarExpandOnHover}
          asideHoving={mergeProps?.sidebarAsideHoving}
          onHover={mergeProps.onHover}
          onAsideIn={mergeProps?.onAsideIn}
          onAsideOut={mergeProps?.onAsideOut}
        ></LayoutSidebar>
      )}
      <Content sidebarWidth={getSidebarWith}>
        <HeaderWrapper scrollY={scrollY}>
          {mergeProps.headerVisible && (
            <LayoutHeader
              height={mergeProps?.headerHeight}
              logo={headerLogo}
              sidebarWidth={getSidebarWith}
            >
              {mergeProps?.header}
            </LayoutHeader>
          )}
        </HeaderWrapper>
        <LayoutContent>
          <Outlet></Outlet>
        </LayoutContent>
        {mergeProps?.footerEnable && (
          <LayoutFooter>{/* Footer content */}</LayoutFooter>
        )}
      </Content>
      {mergeProps?.maskVisible && <Mask onClick={() => {}} />}
    </Container>
  );
};

export default SugarLayout;
