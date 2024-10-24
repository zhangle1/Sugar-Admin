// Button.styles.tsx
import styled, { css } from 'styled-components';
import { Slot } from '@radix-ui/react-slot';
import {
  getAccentHover,
  getColorPrimaryHover,
  getHover
} from '@sugar/@core/preferences';

// 基础样式
const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem; /* rounded-md */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  transition: colors 0.2s ease-in-out;
  outline: none;
  position: relative;
  &:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

// 变体样式
const variantStyles = css<{ variant?: string; size?: string, customStyle?: React.CSSProperties  }>`
  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return css`
          background-color: ${p => p.theme.colorPrimary};
          color: ${p => p.theme.primaryForeground};
          &:hover {
            background-color: ${p => getColorPrimaryHover(p.theme)};
          }
        `;
      case 'destructive':
        return css`
          background-color: var(--destructive);
          color: var(--destructive-foreground);
          &:hover {
            background-color: var(--destructive-hover);
          }
        `;
      case 'outline':
        return css`
          border: 1px solid ${p => p.theme.inputBorderColor};

          background-color: ${p => p.theme.accent};
          color: ${p => p.theme.accentForeground};
          &:hover {
            background-color: ${p => getAccentHover(p.theme)};
          }
        `;
      case 'secondary':
        return css`
          background-color: var(--secondary);
          color: var(--secondary-foreground);
          &:hover {
            background-color: var(--secondary-hover);
          }
        `;
      case 'ghost':
        return css`
          color: ${p => p.theme.mutedForegroundColor};
          background: ${p => p.theme.backgroundDeep};
          &:hover {
            background: ${p => getHover(p.theme.backgroundDeep)};
            color: ${p => getHover(p.theme.mutedForegroundColor)};
          }
        `;
      case 'ghost-header':
        return css`
          color: ${p => p.theme.mutedForegroundColor};
          background: ${p => p.theme.background};
          &:hover {
            background: ${p => getHover(p.theme.background)};
            color: ${p => getHover(p.theme.mutedForegroundColor)};
          }
        `;

      case 'link':
        return css`
          color: var(--primary);
          text-decoration: underline;
          &:hover {
            text-decoration: underline;
          }
        `;
      default:
        return css`
          background-color: ${p => p.theme.colorPrimary};
          color: ${p => p.theme.primaryForeground};
          &:hover {
            background-color: ${p => getColorPrimaryHover(p.theme)};
          }
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          height: 2.25rem;
          padding: 0 0.75rem;
          border-radius: 0.375rem;
        `;
      case 'lg':
        return css`
          height: 2.75rem;
          padding: 0 2rem;
          border-radius: 0.375rem;
        `;
      case 'icon':
        return css`
          height: 2.5rem;
          width: 2.5rem;
        `;
      default:
        return css`
          height: 2.5rem;
          padding: 0 1rem;
        `;
    }
  }}

`;

// Styled Button Component
export const StyledButton = styled.button<{ customStyle?: React.CSSProperties }>`
  ${baseStyles}
  ${variantStyles}
  ${({ customStyle }) => customStyle && css`
    ${Object.entries(customStyle).map(([key, value]) => `${key}: ${value};`).join('\n')}
  `}
`;
