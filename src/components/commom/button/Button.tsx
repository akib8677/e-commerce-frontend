import React from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit";
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  isLoading = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-md shadow-md hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
    disabled={isLoading}
  >
    {isLoading ? "Loading..." : children}
  </button>
);

export default Button;
