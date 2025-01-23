import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, target='_self' }) => {
  return (
    <a 
      href={href}
      target={target}
      rel="noopener noreferrer" 
      className="border border-meshtastic-primary bg-transparent text-meshtastic-primary rounded hover:bg-meshtastic-primary hover:text-gray-900 transition-colors px-4 py-2"
    >
      {children}
    </a>
  );
};

export default Button;