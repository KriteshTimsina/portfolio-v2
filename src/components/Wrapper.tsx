import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`px-5 mx-auto w-full max-w-4xl md:px-5 lg:px-0 md:w-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
