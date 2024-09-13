// StyledLabel.tsx
import styled from 'styled-components';

const StyledLabel = styled.label`
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

StyledLabel.displayName = 'StyledLabel';

export { StyledLabel as SugarLabel };