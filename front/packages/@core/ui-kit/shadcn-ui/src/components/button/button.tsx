// Button.tsx
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { StyledButton } from './button.style';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'ghost-header'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : StyledButton;
    return (
      <Component
        className={className}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button as SugarButton };
