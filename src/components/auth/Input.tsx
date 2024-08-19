import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { InputHTMLAttributes, forwardRef } from "react";

const inputVariants = cva(
  `bg-transparent outline outline-neutral-300 outline-1 px-8 py-8 rounded-lg w-full`,
  {
    variants: {
      variant: {
        error: "outline-red-300 outline-2",
      },
    },
  },
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  ref?: React.Ref<HTMLInputElement>;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      placeholder,
      error,
      variant,
      onChange,
      type,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div>
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(inputVariants({ variant }), className)}
          {...props}
        >
          {children}
        </input>
        {error && <span className="text-red-500 text-xs px-3">* {error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
