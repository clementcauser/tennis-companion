import { ComponentPropsWithoutRef } from 'react';

export type TextInputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  error?: string;
};
