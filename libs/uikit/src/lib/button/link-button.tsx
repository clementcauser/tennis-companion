import clsx from 'clsx';
import { LinkButtonProps } from './button.types';
import styles from './button.module.css';
import { getButtonDynamicStyles } from './button.utils';

export const LinkButton = ({
  children,
  variant = 'ghost',
  status = 'primary',
  size = 'medium',
  ...rest
}: LinkButtonProps) => {
  return (
    <a
      className={clsx(
        styles['button-common'],
        getButtonDynamicStyles(variant, status, size)
      )}
      data-testid="link-button"
      {...rest}
    >
      {children}
    </a>
  );
};

export default LinkButton;
