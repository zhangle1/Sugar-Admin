// StyledLabel.tsx
import {
  getColorPrimary,
  getColorPrimaryHover
} from '@sugar/@core/preferences';
import styled, { css } from 'styled-components';

export interface LabelProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const baseStyles = css`
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  line-height: 1.5; /* leading-none */
  cursor: pointer;
  color: ${props => props.theme.foregroundColor};

  &.peer-disabled {
    cursor: not-allowed;
    opacity: 0.7; /* peer-disabled:opacity-70 */
  }
`;

const variantStyles = css<{ variant?: string; size?: string }>`
  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return css``;
      case 'destructive':
        return css``;
      case 'outline':
        return css``;
      case 'secondary':
        return css``;
      case 'ghost':
        return css``;
      case 'link':
        return css`
          color: ${p => getColorPrimary(p.theme)};
          font-size: 0.875rem;
          line-height: 1.25rem;
          cursor: pointer;
          :hover {
            color: ${p => getColorPrimaryHover(p.theme)};
          }
        `;
      default:
        return css``;
    }
  }}
`;

const StyledLabel = styled.label<{ variant?: string; size?: string }>`
  ${baseStyles}
  ${variantStyles}
`;

StyledLabel.displayName = 'StyledLabel';

export { StyledLabel as SugarLabel };
