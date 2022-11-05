import { useId } from 'react';
import { TextInputProps } from './text-input.types';
import clsx from 'clsx';

const TextInput = ({ label, error, id, ...inputProps }: TextInputProps) => {
  const inputId = useId();
  const errorId = useId();

  return (
    <div className="mb-3">
      <label
        htmlFor={id ?? inputId}
        className="form-label inline-block mb-1 text-gray-700"
      >
        {label}
      </label>
      <input
        type="text"
        id={id ?? inputId}
        {...inputProps}
        aria-invalid={!!error}
        aria-describedby={errorId}
        data-testid="text-input"
        className={clsx(
          'form-control block w-full px-2 py-2 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border-2 border-solid border-gray-200 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-50 focus:border-primary-500 focus:outline-none',
          !!error && 'border-danger-500'
        )}
      />
      {!!error && (
        <p role="alert" id={errorId} className="text-sm text-danger-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
