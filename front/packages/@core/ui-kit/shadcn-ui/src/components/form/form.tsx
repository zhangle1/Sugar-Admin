import styled from 'styled-components';
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
  useForm
} from 'react-hook-form';

const FormItem = styled.div`
  space-y: 0.5rem; /* equivalent to space-y-2 */
`;

const FormLabel = styled(LabelPrimitive.Root)<{ error?: object }>`
  color: ${props =>
    props.error ? 'red' : 'inherit'}; /* Handle error styling */
`;

const FormControl = styled(Slot)<{ error?: object }>`
  border: 1px solid ${props => (!!props.error ? 'red' : '#ccc')};
  padding: 0.5rem;
`;

const FormDescription = styled.p`
  font-size: 0.875rem; /* equivalent to text-sm */
  color: #6b7280; /* muted foreground color */
`;

const FormMessage = styled.p<{ error?: object }>`
  font-size: 0.875rem; /* equivalent to text-sm */
  font-weight: 500;
  color: ${props => (!!props.error ? 'red' : 'inherit')};
`;

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);

  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }
  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const SugarFormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <FormItem ref={ref} {...props} />
    </FormItemContext.Provider>
  );
});

SugarFormItem.displayName = 'FormItem';

const SugarFormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <FormControl
      ref={ref}
      id={formItemId}
      error={error}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = 'FormControl';

const SugarFormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return <FormDescription ref={ref} id={formDescriptionId} {...props} />;
});
FormDescription.displayName = 'FormDescription';

const SugarFormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <FormMessage ref={ref} id={formMessageId} {...props} error={error}>
      {body}
    </FormMessage>
  );
});
FormMessage.displayName = 'FormMessage';

export {
  useFormField as useSugarFormField,
  Form as SugarForm,
  SugarFormItem,
  FormLabel,
  SugarFormControl,
  SugarFormDescription,
  SugarFormMessage,
  FormField as SugarFormField
};
