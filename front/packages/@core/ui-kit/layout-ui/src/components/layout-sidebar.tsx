import withDefaultProps from 'packages/@core/base/shared/src/utils/withDefault';
import { memo, MouseEventHandler, ReactNode, useMemo, useState } from 'react';
import styled from 'styled-components';
import SidebarCollapseButton from './widgets/sidebar-collapse-button';
import SidebarFixedButton from './widgets/sidebar-fixed-button';

interface Props {
  logo?: ReactNode; // 可选的 logo 元素
  menu?: ReactNode; // 可选的 menu 元素
  children?: ReactNode; // 侧边栏的内容

  width: number;
  extraWidth: number;
  collapsed: boolean;
  expandonHover: boolean;
  asideHoving: boolean;
  onCollapsed: Function;
  onAsideIn?: MouseEventHandler | undefined;
  onAsideOut?: MouseEventHandler | undefined;
  onHover: Function;
}

const HiddenContainer = styled.div<{width:number}>`
  width: ${(props)=>`${props.width}px`};
  height: 100%;
`;

const AsideContainer = styled.aside<{ width: number }>`
  position: fixed;
  width: ${props => `${props.width}px`};
  max-width: 230px;
  height: 100%;
  background-color: ${p => p.theme.bgSideBar};
  border-color: ${p => p.theme.border};
  border-right-width: 1px;
  z-index: 201;
`;

const LogoSlotHeader = styled.div<{ width: number }>`
  width: ${props => `${props.width}px`};
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

  const showFixButton = useMemo(() => {
    var showFixButton = true;
    if (mergeProps?.collapsed == true) {
      showFixButton = false;
    }

    if (
      mergeProps?.asideHoving == false &&
      mergeProps?.expandonHover == false
    ) {
      showFixButton = false;
    }

    return showFixButton;
  }, [
    mergeProps?.expandonHover,
    mergeProps?.asideHoving,
    mergeProps?.collapsed
  ]);

  return (
    <>
      <HiddenContainer         width={mergeProps.width}
      ></HiddenContainer>
      <AsideContainer
        width={mergeProps.width}
        onMouseEnter={mergeProps?.onAsideIn}
        onMouseLeave={mergeProps?.onAsideOut}
      >
        <LogoSlotHeader width={mergeProps.width}>
          {mergeProps?.logo ?? <></>}
        </LogoSlotHeader>
        {mergeProps?.menu??<></>}
        <SidebarCollapseButton
          collapsed={mergeProps?.collapsed}
          onCollapsed={mergeProps?.onCollapsed}
        />

        {showFixButton ? (
          <SidebarFixedButton
            onExpandOnHover={mergeProps?.onHover}
            expandOnHover={mergeProps?.expandonHover}
          ></SidebarFixedButton>
        ) : (
          <></>
        )}
      </AsideContainer>
    </>
  );
};

export default LayoutSidebar;
