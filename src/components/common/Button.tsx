import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  `font-serif text-md text-center shadow-sm transition-all duration-200`,
  {
    variants: {
      variant: {
        light:
          "bg-primaryWashed-50 text-neutral-900 hover:opacity-[0.9] hover:shadow-md",
        auth: "bg-blue-600 text-neutral-100 hover:opacity-[0.9] hover:shadow-lg",
      },
      size: {
        full: "w-full py-6 rounded-xl",
      },
      state: {
        disabled: "!opacity-[0.4] !shadow-sm cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "full",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  disabled: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, type, disabled, variant, className, children, ...props }, ref) => {
    return (
      <button
        type={type}
        disabled={disabled}
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            state: disabled ? "disabled" : null,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
