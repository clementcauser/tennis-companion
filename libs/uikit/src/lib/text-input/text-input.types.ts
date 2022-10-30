import { ComponentPropsWithoutRef } from 'react';

export type TextInputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
};
