import type { ButtonHTMLAttributes, ReactNode } from 'react';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode; // Contenu du bouton (texte ou icônes)
  variant?: 'primary' | 'secondary' | 'danger'; // Types prédéfinis de boutons
  size?: 'small' | 'medium' | 'large'; // Tailles de bouton
  isDisabled?: boolean; // Désactiver le bouton
};

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  isDisabled = false,
  className = '',
  ...rest
}: IButtonProps) => {
  // Styles de base du bouton
  const baseStyle =
    'rounded focus:outline-none focus:ring transition duration-300';

  // Styles en fonction de la variante
  const variantStyles: Record<string, string> = {
    primary:
      'bg-[#f5ab35] text-white hover:bg-[#f5ab35] focus:ring-[#f5ab35] border-b-4 border-[#e19721] ',
    secondary:
      ' mt-8 justify-start text-white hover:bg-gray-300 border hover:text-gray-800 focus:ring-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
  };

  // Styles en fonction de la taille
  const sizeStyles: Record<string, string> = {
    small: ' text-sm',
    medium:
      'px-[50px] py-[10px] md:py-[20px] font-[500] leading-[25px] text-[18px]',
    large: 'px-10 py-3 text-xl',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${
        isDisabled ? 'cursor-not-allowed opacity-50' : ''
      } ${className}`}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
