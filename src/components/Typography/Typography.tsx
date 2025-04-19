// import React from 'react';
// import { TypographyProps, TextColor } from './Typography.types';
// import clsx from 'clsx';

// const colorClasses: Record<string, string> = {
//   primary: 'text-gray-900',
//   secondary: 'text-gray-600',
//   error: 'text-red-600',
//   success: 'text-green-600',
//   warning: 'text-yellow-600',
//   info: 'text-blue-600',
//   black: 'text-black',
//   white: 'text-white',
// };

// const weightClasses = {
//   light: 'font-light',
//   normal: 'font-normal',
//   medium: 'font-medium',
//   semibold: 'font-semibold',
//   bold: 'font-bold',
// };

// const baseStyles = {
//   h1: 'text-4xl leading-tight',
//   h2: 'text-3xl leading-snug',
//   h3: 'text-2xl leading-snug',
//   h4: 'text-xl leading-snug',
//   h5: 'text-lg leading-normal',
//   h6: 'text-base leading-normal',
//   paragraph: 'text-base leading-relaxed',
//   label: 'text-sm',
//   caption: 'text-xs',
//   helperText: 'text-sm',
// };

// export const Typography: React.FC<TypographyProps> = ({
//   variant,
//   children,
//   className,
//   color = 'primary',
//   weight,
//   as: Component,
//   id,
// }) => {
//   const Element = Component || (variant.startsWith('h') ? variant : 'p');
//   const colorClass = colorClasses[color] || (color ? `text-[${color}]` : '');
//   const defaultWeight = variant === 'label' ? 'medium' : 
//                        variant.startsWith('h') ? 'bold' : undefined;

//   return (
//     <Element
//       id={id}
//       className={clsx(
//         baseStyles[variant],
//         weight ? weightClasses[weight] : defaultWeight ? weightClasses[defaultWeight] : '',
//         colorClass,
//         variant === 'caption' && 'text-gray-500',
//         variant === 'helperText' && 'text-gray-400',
//         className
//       )}
//     >
//       {children}
//     </Element>
//   );
// };

import React from 'react';
import { TypographyProps } from './Typography.types';
import clsx from 'clsx';

const colorClasses: Record<string, string> = {
  primary: 'text-gray-900',
  secondary: 'text-gray-600',
  error: 'text-red-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600',
  black: 'text-black',
  white: 'text-white',
};

const weightClasses = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const baseStyles = {
  h1: 'text-4xl leading-tight',
  h2: 'text-3xl leading-snug',
  h3: 'text-2xl leading-snug',
  h4: 'text-xl leading-snug',
  h5: 'text-lg leading-normal',
  h6: 'text-base leading-normal',
  paragraph: 'text-base leading-relaxed',
  label: 'text-sm',
  caption: 'text-xs',
  helperText: 'text-sm',
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  color = 'primary',
  weight,
  as: Component,
  id,
}) => {
  const Element = Component || (variant.startsWith('h') ? variant : 'p');
  const colorClass = colorClasses[color] ?? `text-[${color}]`;

  const defaultWeight = variant === 'label'
    ? 'medium'
    : variant.startsWith('h')
    ? 'bold'
    : undefined;

  return (
    <Element
      id={id}
      className={clsx(
        baseStyles[variant],
        weight ? weightClasses[weight] : defaultWeight ? weightClasses[defaultWeight] : '',
        colorClass,
        variant === 'caption' && 'text-gray-500',
        variant === 'helperText' && 'text-gray-400',
        className
      )}
    >
      {children}
    </Element>
  );
};
