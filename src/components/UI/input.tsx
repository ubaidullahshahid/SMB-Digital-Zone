import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-[12px] text-[#FFFFFF80] font-[400] mb-[6px]">
          {label}
        </label>
      )}
      <input
        {...props}
        className="w-full pointer-events-auto px-4 h-[36px] bg-zinc-900 text-[#ffffffe3] border-[0.77px] border-[#343B4F] rounded-[8px] focus:outline-none focus:border focus:border-[#313e61] placeholder:text-[12px] placeholder:text-[#FFFFFF40]"
      />
    </div>
  );
};

export default Input;
