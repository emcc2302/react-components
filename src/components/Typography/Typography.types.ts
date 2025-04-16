export type TypographyVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'paragraph'
  | 'label'
  | 'caption'
  | 'helperText';

export type TextColor = 
  | 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info'
  | 'black' | 'white' | string;

export interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  color?: TextColor;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  as?: React.ElementType;
  id?: string;
}