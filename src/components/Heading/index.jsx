import React from "react";

const sizes = {
  headingxs: "text-[10px] font-bold",
  headings: "text-[12px] font-bold",
  headingmd: "text-[14px] font-bold",
  headinglg: "text-[18px] font-bold lg:text-[15px]",
};

const Heading = ({ children, className = "", size = "headingmd", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-800 font-helvetica ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
