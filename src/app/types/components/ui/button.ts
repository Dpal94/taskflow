export type BaseButtonType = {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
