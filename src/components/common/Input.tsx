import React, { HTMLAttributes, forwardRef } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
  name: string;
  type: string;
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { name, placeholder, onChange, type, className, children, ...props },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        {...props}
      >
        {children}
      </input>
    );
  },
);

Input.displayName = "Input";
export default Input;
