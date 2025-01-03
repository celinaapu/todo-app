import React from "react";

type RegisterLayoutProps = {
  component: React.ReactNode;
};

export const RegisterLayout: React.FC<RegisterLayoutProps> = ({
  component,
}) => {
  return (
    <div className=" text-center items-center justify-center flex flex-row gap-5">
      {component}
    </div>
  );
};

/*<div className="w-1/2">
        <h3 className="text-blue-500 text-sm text-start">Register</h3>
        <div className="border-shadow hover:border-blue-500 hover:border-5">
          <SignUpDiv />
        </div>
      </div>

      <div className=" text-center items-center justify-center m-10 w-screen">
        <h2 className="text-blue-500 text-sm text-start ">Login</h2>
        <div className="border-shadow border hover:border-blue-500 hover:border-5">
          <RegisterForm />
        </div>
        /
      </div>*/
