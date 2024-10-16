import React from 'react';
import styled from 'styled-components';

interface Props {
  collapsed?: boolean;
  href?: string;
  logoSize?: number;
  src?: string;
  text: string;
  theme?: string;
}

const Container = styled.div<{ theme?: string }>`
  display: flex;
  align-items: center;
  height: 100%;
  &.${props => props.theme} {
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  padding: 0 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.5s;
`;

const LogoImage = styled.img`
  border-radius: 0;
  background: transparent;
`;

const LogoText = styled.span`
  color:${props => props.theme.foregroundColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SugarLogo: React.FC<Props> = ({
  collapsed,
  href = '',
  logoSize = 32,
  src,
  text,
  theme = 'light'
}) => {
  console.log('collapsed:' + collapsed);
  return (
    <Container className={theme}>
      <LogoLink href={href}>
        {src && <LogoImage alt={text} src={src} width={logoSize} />}
        {!collapsed && <LogoText>{text}</LogoText>}
      </LogoLink>
    </Container>
  );
};

export default SugarLogo;
