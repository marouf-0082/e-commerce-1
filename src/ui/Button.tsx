interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, className, onClick }: IButtonProps) {
  return <button className={className} onClick={onClick}>{children}</button>;
}

export default Button;
