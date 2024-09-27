import React, { ReactNode, useMemo, useState } from 'react';
import styled from 'styled-components';
import LayoutSidebar from './components/layout-sidebar';
import withDefaultProps from 'packages/@core/base/shared/src/utils/withDefault';

interface Props {
  logo?: ReactNode;
  sidebarEnableState?: boolean;
  headerVisible?: boolean;
  tabbarEnable?: boolean;
  children?: ReactNode;
  footerEnable?: boolean;
  maskVisible?: boolean;
  sidebarExtraCollapsedWidth?: number;
  onCollapsed:Function,
  sidebarWith?: number;
  sidebarCollapsed: boolean;
  sidebarHidden?: boolean;
  sideCollapseWidth?:number;
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const Content = styled.div`
  flex: 1;
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

const LayoutHeader = styled.header`
  /* Add your header styles here */
`;

const LayoutTabbar = styled.div`
  /* Add your tabbar styles here */
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
          sidebarWith: 180,
          sidebarHidden: false,
          sideCollapseWidth:60
        },
        props
      ),
    [props]
  );

  const getSidebarWith = useMemo(() => {
    let width = 0;
    // if(mergeProps.sidebarHidden){
    //   return width;
    // }

    if(mergeProps?.sidebarCollapsed){
      width=mergeProps.sideCollapseWidth??0
    }else{
      width= mergeProps.sidebarWith??0
    }
    return width;

  }, [ mergeProps]);

  const getSidebarExtraWidth = useMemo(() => {
    var width = mergeProps.sidebarCollapsed
      ? mergeProps.sidebarExtraCollapsedWidth
      : mergeProps?.sidebarWith;
      width=width??0
    return width;
  }, [ mergeProps]);

  return (
    <Container>
      {mergeProps?.sidebarEnableState && (
        <LayoutSidebar logo={mergeProps?.logo}
           width={getSidebarWith}
           extraWidth={getSidebarExtraWidth}
           collapsed={mergeProps.sidebarCollapsed}
           onCollapsed={mergeProps.onCollapsed}
        >
        </LayoutSidebar>
      )}
      <Content>
        <HeaderWrapper scrollY={scrollY}>
          {mergeProps?.headerVisible && (
            <LayoutHeader>{/* Header content */}</LayoutHeader>
          )}
          {mergeProps?.tabbarEnable && (
            <LayoutTabbar>{/* Tabbar content */}</LayoutTabbar>
          )}
        </HeaderWrapper>
        <LayoutContent>{mergeProps?.children}</LayoutContent>
        {mergeProps?.footerEnable && (
          <LayoutFooter>{/* Footer content */}</LayoutFooter>
        )}
      </Content>
      {mergeProps?.maskVisible && <Mask onClick={() => {}} />}
    </Container>
  );
};

export default SugarLayout;
