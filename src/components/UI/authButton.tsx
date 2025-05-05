import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AuthButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full h-[40px] flex justify-center items-center text-[15px] rounded-md bg-gradient-to-bl from-[#18C8FF] to-[#933FFE] text-white cursor-pointer transition-all duration-200 hover:scale-[1.05]"
    >
      {children}
    </button>
  );
};

export default AuthButton;
