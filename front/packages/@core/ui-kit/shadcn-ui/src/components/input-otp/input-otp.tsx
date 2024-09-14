import React from 'react';
import styled from 'styled-components';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';

// Styled-components

const StyledOTPInput = styled(OTPInput)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;

const StyledOTPGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledOTPSlot = styled.div<{ isActive: boolean; hasFakeCaret: boolean }>`
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid ${p=> p.isActive?p.theme.colorPrimary:p.theme.inputBorderColor};
  font-size: 0.875rem;
  transition: all 0.2s;
  /* border-radius: ${({ first, last }) =>
    first ? '0.375rem 0 0 0.375rem' : last ? '0 0.375rem 0.375rem 0' : '0'}; */
  z-index: ${({ isActive }) => (isActive ? 10 : 'auto')};
  background-color: ${p => p.theme.accent};
  color: ${props => props.theme.foregroundColor};

  &:first-child {
    border-radius: 0.375rem 0 0 0.375rem;
    border-left: 1px solid ${p =>p.isActive?p.theme.colorPrimary:p.theme.inputBorderColor};
  }

  &:last-child {
    border-radius: 0 0.375rem 0.375rem 0;
    border-right: 1px solid ${p =>p.isActive?p.theme.colorPrimary:p.theme.inputBorderColor};
  }

  &:focus {
    border-color: 2px solid ${p => p.theme.colorPrimary};
    /* background-color: ${p => p.theme.focusBackgroundColor}; */
  }

  .caret {
    position: absolute;
    inset: 0;
    display: flex;

    align-items: center;
    justify-content: center;

    .caret-item {
      height: 1rem;
      width: 1px;
      background: ${p => p.theme.foregroundColor};
      animation: blink 1s step-start infinite;
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const StyledOTPSeparator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Components

const InputOTP = React.forwardRef<
  React.ElementRef<typeof StyledOTPInput>,
  React.ComponentPropsWithoutRef<typeof StyledOTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <StyledOTPInput ref={ref} className={className} {...props} />
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ElementRef<typeof StyledOTPGroup>,
  React.ComponentPropsWithoutRef<typeof StyledOTPGroup>
>(({ className, ...props }, ref) => (
  <StyledOTPGroup ref={ref} className={className} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ElementRef<typeof StyledOTPSlot>,
  React.ComponentPropsWithoutRef<typeof StyledOTPSlot> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <StyledOTPSlot
      ref={ref}
      isActive={isActive}
      hasFakeCaret={hasFakeCaret}
      className={className}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="caret">
          <div className="caret-item"></div>
        </div>
      )}
    </StyledOTPSlot>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<typeof StyledOTPSeparator>,
  React.ComponentPropsWithoutRef<typeof StyledOTPSeparator>
>(({ ...props }, ref) => (
  <StyledOTPSeparator ref={ref} role="separator" {...props}>
    <Dot />
  </StyledOTPSeparator>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

const REGEXP_ONLY_DIGITS = '^\\d+$';
const REGEXP_ONLY_CHARS = '^[a-zA-Z]+$';
const REGEXP_ONLY_DIGITS_AND_CHARS = '^[a-zA-Z0-9]+$';

export {
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
  InputOTP as SugarInputOTP,
  InputOTPGroup as SugarInputOTPGroup,
  InputOTPSlot as SugarInputOTPSlot,
  InputOTPSeparator as SugarInputOTPSeparator
};
