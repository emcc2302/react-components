import React from 'react';
import { TextInputProps } from './TextInput.types';
import clsx from 'clsx';

export const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  helperText,
  icon,
  className,
  fullWidth = true,
  onIconClick,
  required,
  id,
  ...props
}) => {
  const iconContainerClasses = clsx(
    'mr-2 text-gray-500',
    onIconClick && 'cursor-pointer hover:text-gray-700'
  );

  return (
    <div className={clsx(fullWidth ? 'w-full' : 'w-auto')}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div
        className={clsx(
          'flex items-center border rounded-md px-3 py-2 transition-colors duration-200',
          'focus-within:ring-2 focus-within:ring-offset-1',
          error 
            ? 'border-red-500 focus-within:ring-red-500 focus-within:border-red-500' 
            : 'border-gray-300 focus-within:ring-blue-500 focus-within:border-blue-500',
          props.disabled && 'bg-gray-100 cursor-not-allowed',
          className
        )}
      >
        {icon && (
          <span 
            className={iconContainerClasses}
            onClick={onIconClick}
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <input
          id={id}
          className={clsx(
            'w-full outline-none bg-transparent',
            props.disabled && 'text-gray-500 cursor-not-allowed'
          )}
          aria-invalid={!!error}
          aria-describedby={helperText ? `${id}-helper` : undefined}
          aria-required={required}
          required={required}
          {...props}
        />
      </div>
      {helperText && !error && (
        <p id={`${id}-helper`} className="text-xs text-gray-500 mt-1">
          {helperText}
        </p>
      )}
      {error && (
        <p className="text-xs text-red-500 mt-1" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};