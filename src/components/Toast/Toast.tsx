import React, { useEffect } from 'react';
import { ToastProps } from './Toast.types';
import clsx from 'clsx';

const positionClasses = {
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
};

const variantClasses = {
  info: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

export const Toast: React.FC<ToastProps> = ({ 
  message, 
  variant = 'info', 
  onClose, 
  position = 'bottom-right',
  duration = 4000,
  showClose = true,
  action,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      role="alert"
      className={clsx(
        'fixed px-4 py-3 rounded shadow-lg text-white flex items-center',
        'animate-fade-in-up',
        variantClasses[variant],
        positionClasses[position]
      )}
    >
      <div className="flex-grow">{message}</div>
      
      {action && (
        <button 
          onClick={action.handler}
          className="ml-3 text-white underline font-medium"
        >
          {action.label}
        </button>
      )}
      
      {showClose && (
        <button 
          onClick={onClose} 
          className="ml-3 text-white font-bold text-lg"
          aria-label="Close toast"
        >
          &times;
        </button>
      )}
    </div>
  );
};