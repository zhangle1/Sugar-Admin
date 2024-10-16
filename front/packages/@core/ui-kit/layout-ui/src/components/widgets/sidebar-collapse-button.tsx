import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronsLeft, ChevronsRight } from './icon';

const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0.5rem;
  left: 0.75rem;
  z-index: 10;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 0.25rem;
  border-color: ${props => props.theme.border};

  transition: background-color 0.2s;
  color: ${props => props.theme.foregroundColor};

  :hover {
    background: hsl(200deg 10% 90%);
  }
  background: hsl(240 5% 96%);
`;

interface Props {
  collapsed?: boolean;
  onCollapsed?: Function;
}

const CollapseToggle = (props: Props) => {
  const { onCollapsed, collapsed } = props;
  const handleCollapsed = () => {
    onCollapsed?.(!collapsed);
  };

  return (
    <ToggleButton onClick={handleCollapsed}>
      {collapsed ? <ChevronsLeft /> : <ChevronsRight />}
    </ToggleButton>
  );
};

export default CollapseToggle;
