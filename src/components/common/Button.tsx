import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href?: string;
  className?: string;
  title?: string;
  icon?: React.ReactNode;  // Optional icon prop
  buttonIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href = "#", className = 'btn-primary', title = "Start free trial", icon, ...props }) => {
  return (
    <Link href={href} className={`btn ${className}`} {...props}>
      {title}  {/* Button text */}
      {icon && <span className="">{icon}</span>}  {/* Render icon if passed */}
    </Link>
  );
};

export default Button;
