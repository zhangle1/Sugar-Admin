import * as React from "react";
import styled from "styled-components";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}





// Define the styled component
const StyledInput = styled.input`
  flex: 1;
  height: 2.5rem; /* 10 * 0.25rem (Tailwind's h-10) */
  width: 100%;
  border-radius: 0.375rem; /* Tailwind's rounded-md */
  border: 1px solid ${p=>p.theme.inputBorderColor}; /* Tailwind's border-input color */
  background-color:${p=>p.theme.inputBackground};
  padding: 0.5rem 0.75rem; /* Tailwind's px-3 py-2 */
  font-size: 0.875rem; /* Tailwind's text-sm */
  color: ${props => props.theme.foregroundColor};

  &:focus {
    outline: none;
    border: 1px solid ${p=>p.theme.colorPrimary}; /* Tailwind's ring color */
    /* ring-offset-width: 2px; */
  }
  
  &::placeholder {
    color: #9ca3af; /* Tailwind's placeholder:text-muted-foreground color */
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* File input styles */
  ::-webkit-file-upload-button {
    border: 0;
    background: transparent;
    font-size: 0.875rem; /* Tailwind's file:text-sm */
    font-weight: 500; /* Tailwind's file:font-medium */
  }
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <StyledInput
        type={type}
        className={className} // Allow additional class names
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input as SugarInput };