import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import styled from "styled-components";

// 创建样式化组件
const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  height: 1rem; /* h-4 */
  width: 1rem;  /* w-4 */
  flex-shrink: 0;
  border-radius: 0.125rem; /* rounded-sm */
  border: 1px solid ${p=>p.theme?.inputBorderColor}; /* border-primary */
  background-color: transparent;
  outline: none;
  position: relative;
  
  &:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &[data-state='checked'] {
    background-color: ${p=>p.theme?.colorPrimary}; /* bg-primary */
    color: ${p=>p.theme?.primaryForeground}; /* text-primary-foreground */
  }
`;

// `StyledIndicator` 样式化组件
const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
`;

const CheckIcon = styled(Check)`
  height: 1rem; /* h-4 */
  width: 1rem;  /* w-4 */
`

const Checkbox = React.forwardRef<
  React.ElementRef<typeof StyledCheckbox>,
  React.ComponentPropsWithoutRef<typeof StyledCheckbox>
>(({ className, ...props }, ref) => (
  <StyledCheckbox ref={ref} className={className} {...props}>
    <StyledIndicator>
      <CheckIcon />
    </StyledIndicator>
  </StyledCheckbox>
));

Checkbox.displayName = "Checkbox";

export { Checkbox as SugarCheckBox };