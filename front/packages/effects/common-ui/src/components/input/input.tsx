import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { InputProps } from './types';

// Define the keyframes for the slide-up transition
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define styles for the input based on props
const Input = styled.input`
  border: 1px solid ${(props) => (props?.error ? 'red' : '#d1d5db')};
  background-color: #f9fafb;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// Define styles for the error message
const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  animation: ${slideUp} 0.3s ease-in-out;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 12px;
  color: #333;
`;

const Container = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

const InputField = ({
  name,
  label,
  errorTip,
  status,
  className,
  ...props
}: InputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value);
    }
  }, [props.value]);

  return (
    <Container>
      {/* {label && <Label htmlFor={name}>{label}</Label>} */}
      <Input
        id={name}
        value={value}
        onChange={handleChange}
        error={status === 'error'}
        className={className}
        
        {...props}
      />
      {status === 'error' && <ErrorMessage>{errorTip}</ErrorMessage>}
    </Container>
  );
};

export default InputField;