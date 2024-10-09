import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronsLeft, ChevronsRight, Pin, PinOff } from './icon';

const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0.5rem;
  right: 0.75rem;
  z-index: 10;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 0.25rem;

  transition: background-color 0.2s;
  color: ${props => props.theme.foregroundColor};
  border-color: ${props => props.theme.border};

  :hover {
    background: hsl(200deg 10% 90%);
  }
  background: hsl(240 5% 96%);
`;

interface Props {
  expandOnHover?: boolean;
  onExpandOnHover?: Function;
}

const FixedToggle = (props: Props) => {
  const { onExpandOnHover, expandOnHover } = props;
  const handleFixed = () => {
    onExpandOnHover?.(!expandOnHover);
  };

  return (
    <ToggleButton onClick={handleFixed}>
      {expandOnHover ? <Pin /> : <PinOff />}
    </ToggleButton>
  );
};

export default FixedToggle;
