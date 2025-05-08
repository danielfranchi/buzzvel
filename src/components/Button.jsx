import React from 'react';
import clsx from 'clsx';

export default function Button({ children, className, variant = 'primary', ...props }) {
  const baseStyles = 'font-roboto font-medium text-[16px] leading-6 tracking-[0.5px] rounded px-4 py-2 transition-colors duration-300';
  
  const variants = {
    primary: 'text-[#0F172A] border border-[#0F172A] hover:bg-gray-100',
    filled: 'bg-[#0F172A] text-white hover:bg-[#1E293B]',
    orange: 'text-white bg-[#EA580C] border-2 border-[#EA580C] hover:bg-[#D45F00]',  // Novo variant
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
