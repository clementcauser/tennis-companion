import clsx from 'clsx';
import { LinkButtonProps } from './button.types';
import styles from './button.module.css';
import { getButtonDynamicStyles } from './button.utils';
import { forwardRef } from 'react';

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      variant = 'ghost',
      status = 'primary',
      size = 'medium',
      fullWidth = false,
      ...rest
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={clsx(
          styles['button-common'],
          getButtonDynamicStyles(variant, status, size, fullWidth)
        )}
        data-testid="link-button"
        {...rest}
      >
        {children}
      </a>
    );
  }
);

export default LinkButton;
