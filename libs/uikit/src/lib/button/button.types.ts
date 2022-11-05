import { ComponentPropsWithRef } from 'react';

type ButtonStatus = 'primary' | 'info' | 'success' | 'warning' | 'danger';

type ButtonVariant = 'ghost' | 'contained' | 'outlined';

type ButtonSize = 'small' | 'medium' | 'large';

type ButtonCommonProps = {
  variant?: ButtonVariant;
  status?: ButtonStatus;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export type ButtonProps = Omit<ComponentPropsWithRef<'button'>, 'className'> &
  ButtonCommonProps;

export type LinkButtonProps = ComponentPropsWithRef<'a'> & ButtonCommonProps;
