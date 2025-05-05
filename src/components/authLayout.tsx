import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0f] relative">
      <div className=" absolute top-0 left-0 rounded-full">
        <img
          src="/images/top-corner.png"
          alt="Login"
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 right-0 rounded-full">
        <img
          src="/images/bottom-corner.png"
          alt="Login"
          className="w-full h-full"
        />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
