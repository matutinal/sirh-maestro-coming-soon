export type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required?: boolean;
  className?: string;
};