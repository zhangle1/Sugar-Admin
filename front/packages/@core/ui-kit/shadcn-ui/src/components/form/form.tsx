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
  useFormContext
} from 'react-hook-form';

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
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  return {
    name: fieldContext.name,
    ...fieldState
  };
};

const FormItem = styled.div`
  space-y: 0.5rem; /* equivalent to space-y-2 */
`;

const FormLabel = styled(LabelPrimitive.Root)<{ error?: boolean }>`
  color: ${props =>
    props.error ? 'red' : 'inherit'}; /* Handle error styling */
`;

const FormControl = styled(Slot)<{ error?: boolean }>`
  border: 1px solid ${props => (props.error ? 'red' : '#ccc')};
  padding: 0.5rem;
`;

const FormDescription = styled.p`
  font-size: 0.875rem; /* equivalent to text-sm */
  color: #6b7280; /* muted foreground color */
`;

const FormMessage = styled.p<{ error?: boolean }>`
  font-size: 0.875rem; /* equivalent to text-sm */
  font-weight: 500;
  color: ${props => (props.error ? 'red' : 'inherit')};
`;

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField
};
