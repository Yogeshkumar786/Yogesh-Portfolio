
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

const Button = ({ children, href, onClick, variant = 'primary', className = '' }: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition-colors duration-200 inline-block text-center';
  const variantStyles = {
    primary: 'bg-portfolio-green hover:bg-portfolio-dark-green text-white',
    outline: 'border-2 border-portfolio-green text-portfolio-green hover:bg-portfolio-green hover:text-white'
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
