import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

// Define the styled component
const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  flex: 1;
  height: 2.5rem; /* 10 * 0.25rem (Tailwind's h-10) */
  width: 100%;
  border-radius: 0.375rem; /* Tailwind's rounded-md */
  border: 1px solid ${p => p.theme.inputBorderColor}; /* Tailwind's border-input color */
  background-color: ${p => p.theme.inputBackground};
  padding: 0.5rem 2.5rem 0.5rem 0.75rem; /* Tailwind's px-3 py-2, adjust padding for icon */
  font-size: 0.875rem; /* Tailwind's text-sm */
  color: ${props => props.theme.foregroundColor};

  &:focus {
    outline: none;
    border: 1px solid ${p => p.theme.colorPrimary}; /* Tailwind's ring color */
  }

  &::placeholder {
    color: #9ca3af; /* Tailwind's placeholder:text-muted-foreground color */
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  input:-webkit-autofill {
    background-color: transparent;
  }

  /* File input styles */
  ::-webkit-file-upload-button {
    border: 0;
    background: transparent;
    font-size: 0.875rem; /* Tailwind's file:text-sm */
    font-weight: 500; /* Tailwind's file:font-medium */
  }
`;

const ToggleIcon = styled.button`
  position: absolute;
  right: 0.75rem; /* Adjust to match padding */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 1rem; /* Adjust icon size */
  color: ${p => p.theme.foregroundColor};
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const EyeIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 3.5C4.7 3.5 1.5 6.7 1.5 10s3.2 6.5 6.5 6.5 6.5-3.2 6.5-6.5S11.3 3.5 8 3.5zm0 11c-2.7 0-5-2.2-5-5s2.3-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-7c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0 3.5c-.8 0-1.5-.7-1.5-1.5S7.2 9.5 8 9.5s1.5.7 1.5 1.5S8.8 12 8 12z" />
  </svg>
);

const EyeSlashIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M11.3 5.7c-.1.1-.2.2-.3.2-.4.1-.8.2-1.2.2-1.3 0-2.5-.7-3.3-1.8L3.1 2.4c-1.6 1.1-3.1 2.5-3.9 4 .7 1.8 2.3 3.4 4.1 4.5L4 12.6c.2.3.4.5.7.7.5-.7 1.1-1.4 1.7-2.1L7 11.6l.6.6c.5.5 1.1.8 1.7.8.7 0 1.3-.2 1.8-.7l3.5 3.5a.5.5 0 0 0 .7-.7L12.3 6.3c.5-.7.9-1.5 1.1-2.3-.6-.2-1.1-.4-1.7-.4-.7 0-1.4.2-2 .5L11.3 5.7zM8 6.5c.5 0 .9.2 1.2.5.3.3.5.7.5 1.2s-.2.9-.5 1.2C8.9 9.2 8.5 9 8 9s-.9-.2-1.2-.5c-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.2C7.1 6.7 7.5 6.5 8 6.5z" />
  </svg>
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <StyledInputWrapper>
        <StyledInput
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          className={className} // Allow additional class names
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <ToggleIcon onClick={handleTogglePassword}>
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </ToggleIcon>
        )}
      </StyledInputWrapper>
    );
  }
);

Input.displayName = 'Input';

export { Input as SugarInput };
