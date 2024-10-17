import { ReactNode } from 'react';

import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  logo?: ReactNode;
  toggleButton?: ReactNode;
  children?: ReactNode;

  /**
   * 横屏
   */
  fullWidth: boolean;
  /**
   * 高度
   */
  height: number;
  /**
   * 是否移动端
   */
  isMobile: boolean;
  /**
   * 是否显示
   */
  show: boolean;
  /**
   * 侧边菜单宽度
   */
  sidebarWidth: number;
  /**
   * 主题
   */
  theme: string | undefined;
  /**
   * 宽度
   */
  width: string;
  /**
   * zIndex
   */
  zIndex: number;
}

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  border-bottom: 1px solid;
  background-color: var(--header-bg-color);
  transition: margin-top 0.2s;
  top: 0px;
  flex: 0 0 auto;
  transition-property: margin-top;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 200ms;
`;


const LayoutHeader = (props: Props) => {
  const { logo, toggleButton, children } = props;
  return (
    <HeaderContainer>
      {logo ?? <></>}
      {toggleButton ?? <></>}
      {children}
    </HeaderContainer>
  );
};

export default LayoutHeader;
