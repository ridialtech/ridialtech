import React from "react";

const sizes = {
  textxs: "text-[12px] font-normal",
  texts: "text-[14px] font-normal",
};

const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-helvetica ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
