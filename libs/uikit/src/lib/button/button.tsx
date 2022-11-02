import clsx from 'clsx';
import { ButtonProps } from './button.types';
import styles from './button.module.css';
import { getButtonDynamicStyles } from './button.utils';

export const Button = ({
  children,
  variant = 'ghost',
  status = 'primary',
  size = 'medium',
  fullWidth = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      data-testid="button"
      className={clsx(
        styles['button-common'],
        getButtonDynamicStyles(variant, status, size, fullWidth)
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
