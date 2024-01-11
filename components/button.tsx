import BaseButton, { ButtonProps } from 'antd/es/button';

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <BaseButton {...props}>
      {children}
    </BaseButton>
  );
};

export default Button;
