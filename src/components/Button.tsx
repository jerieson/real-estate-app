import React from "react";

type ButtonProps = {
  label: string;
  variant: "primary" | "secondary";
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>; // Accepts a React component representing an SVG
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, variant, Icon, onClick }) => {
  const baseStyle =
    "flex text-sm items-center gap-2 px-6 py-2 font-semibold focus:outline-none cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#FFAC12] w-fit text-black rounded-tr-xl hover:bg-[#FFAC12]/80 md:py-4",
    secondary:
      "bg-black w-fit text-white rounded-tr-xl hover:bg-black/80 md:py-4",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {label}
      {Icon && <Icon className="w-6 h-3" />}{" "}
    </button>
  );
};

export default Button;
