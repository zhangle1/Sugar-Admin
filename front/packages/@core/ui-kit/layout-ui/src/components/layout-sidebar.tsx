import withDefaultProps from 'packages/@core/base/shared/src/utils/withDefault';
import { MouseEventHandler, ReactNode, useState } from 'react';
import styled from 'styled-components';
import SidebarCollapseButton from './widgets/sidebar-collapse-button';
import SidebarFixedButton from './widgets/sidebar-fixed-button';

interface Props {
  logo?: ReactNode; // 可选的 logo 元素
  children?: ReactNode; // 侧边栏的内容

  width:number;
  extraWidth:number,
  collapsed:boolean,
  expandonHover:boolean,
  onCollapsed:Function,
  onAsideIn?:MouseEventHandler| undefined,
  onAsideOut?:MouseEventHandler | undefined,
  onHover:Function,
}

const HiddenContainer = styled.div`
  width: 230px;
  height: 100%;
`;

const AsideContainer = styled.aside<{width:number}>`
  position: fixed;
  width: ${props=>`${props.width}px`};
  max-width: 230px;
  height: 100%;
  background-color: ${p => p.theme.bgSideBar};
  border-color: ${p => p.theme.border};
  border-right-width: 1px;
  z-index: 201;
`;

const LogoSlotHeader = styled.div<{width:number}>`
  width: ${props=>`${props.width}px`};
  height: 48px;
  display: flex;
  align-items: center;
`;

const LayoutSidebar = (props: Props) => {

  const mergeProps = withDefaultProps(
    {
      collapseHeight: 42,
      collapseWidth: 48,
      domVisible: true,
      fixedExtra: false,
      isSidebarMixed: false,
      marginTop: 0,
      mixedWidth: 70,
      paddingTop: 0,
      show: true,
      showCollapseButton: true,
      zIndex: 0
    },
    props
  );

  return (
    <>
      <HiddenContainer></HiddenContainer>
      <AsideContainer width={mergeProps.width}
        onMouseEnter={mergeProps?.onAsideIn}
        onMouseLeave={mergeProps?.onAsideOut}
      >
        <LogoSlotHeader width={mergeProps.width}>{mergeProps?.logo ?? <></>}</LogoSlotHeader>

        <SidebarCollapseButton
          collapsed={mergeProps?.collapsed}
          onCollapsed={mergeProps?.onCollapsed}
        />

        {(!mergeProps?.collapsed==true)?
        <SidebarFixedButton
          onExpandOnHover={mergeProps?.onHover}
          expandOnHover={mergeProps?.expandonHover}
        >
        </SidebarFixedButton>:(<></>)
         }
      </AsideContainer>
    </>
  );
};

export default LayoutSidebar;
