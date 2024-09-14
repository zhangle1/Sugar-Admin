import * as React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';

// Define the styled components
const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInputRowWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledInput = styled.input`
  flex: 1;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid ${p => p.theme.inputBorderColor};
  background-color: ${p => p.theme.inputBackground};
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${props => props.theme.foregroundColor};

  &:focus {
    outline: none;
    border: 1px solid ${p => p.theme.colorPrimary};
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:-webkit-autofill {
    background-color: transparent;
  }

  ::-webkit-file-upload-button {
    border: 0;
    background: transparent;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const ToggleIcon = styled.button`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  font-size: 1rem;
  color: ${p => p.theme.foregroundColor};
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const EyeIcon = () => (
  <svg
    t="1726301944025"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4293"
    width="20"
    height="20"
  >
    <path
      d="M512 768c-183.466667 0-328.533333-85.333333-426.666667-256 98.133333-170.666667 243.2-256 426.666667-256s328.533333 85.333333 426.666667 256c-98.133333 170.666667-243.2 256-426.666667 256z m8.533333-426.666667c-128 0-256 55.466667-328.533333 170.666667 72.533333 115.2 200.533333 170.666667 328.533333 170.666667s238.933333-55.466667 311.466667-170.666667c-72.533333-115.2-183.466667-170.666667-311.466667-170.666667z m-8.533333 298.666667c-72.533333 0-128-55.466667-128-128s55.466667-128 128-128 128 55.466667 128 128-55.466667 128-128 128z m0-85.333333c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666667-42.666667 17.066667-42.666667 42.666667 17.066667 42.666667 42.666667 42.666667z"
      fill="currentColor"
      p-id="4294"
    ></path>
  </svg>
);

const EyeSlashIcon = () => (
  <svg
    t="1726301972206"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4491"
    width="20"
    height="20"
  >
    <path
      d="M422.4 776.533333l76.8-76.8h8.533333c145.066667 0 251.733333-55.466667 332.8-170.666666-25.6-34.133333-55.466667-64-85.333333-89.6L819.2 384c46.933333 38.4 85.333333 89.6 119.466667 145.066667-98.133333 170.666667-243.2 251.733333-426.666667 251.733333-29.866667 4.266667-59.733333 0-89.6-4.266667z m-238.933333-119.466666c-34.133333-34.133333-68.266667-76.8-98.133334-128 98.133333-170.666667 243.2-251.733333 426.666667-251.733334h46.933333l-85.333333 85.333334c-128 8.533333-226.133333 64-298.666667 166.4 17.066667 25.6 38.4 51.2 59.733334 68.266666l-51.2 59.733334zM755.2 213.333333l59.733333 59.733334L277.333333 810.666667l-59.733333-59.733334L755.2 213.333333z"
      fill="currentColor"
      p-id="4492"
    ></path>
  </svg>
);

// Define the password strength meter
const StrengthMeter = styled.div<{ strength: number; length: number }>`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.25rem;

  & > div {
    flex: 1;
    height: 0.34rem;
    border-radius: 0.4rem;
    background-color: ${p => {
      // If no length, return transparent or white
      if (p.length === 0) return '#e0e0e0';
      // Define color for different strength levels
      if (p.strength <=1) return '#e74242'; // Weak: Red
      if (p.strength <=2) return '#ED6F6F'; // Weak: Light Red
      if (p.strength <= 3) return '#EFBD47'; // Medium: Yellow
      if (p.strength <= 4) return '#55D187'; // Strong: Green
      return '#e0e0e0'; // Default grey color
    }};



  }
  & > div:nth-child(n+${p => p.strength +1}) {
    background-color: #e0e0e0; // Gray color for remaining blocks
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  needPasswordStrengthCheck?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = 'text', needPasswordStrengthCheck = false, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState<number>(0);
    const [passwordLength, setPasswordLength] = useState<number>(0);
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === 'password') {
        const password = e.target.value;
        const result = zxcvbn(password);
        setPasswordLength(password.length);
        setPasswordStrength(result.score);
      }
      if (props.onChange) {
        props.onChange(e);
      }
    };

    return (
      <StyledInputWrapper>
        <StyledInputRowWrapper>
          <StyledInput
            type={type === 'password' && !showPassword ? 'password' : 'text'}
            className={className}
            ref={ref}
            onChange={handleChange}
            {...props}
          />
          {type === 'password' && (
            <ToggleIcon onClick={handleTogglePassword}>
              {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
            </ToggleIcon>
          )}
        </StyledInputRowWrapper>
        {type === 'password' && needPasswordStrengthCheck && (
          <StrengthMeter strength={passwordStrength} length={passwordLength}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </StrengthMeter>
        )}
      </StyledInputWrapper>
    );
  }
);

Input.displayName = 'Input';

export { Input as SugarInput };
