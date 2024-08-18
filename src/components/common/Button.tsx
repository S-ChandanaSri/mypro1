import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  `font-serif flex items-center justify-center text-md text-center shadow-sm transition-all duration-200`,
  {
    variants: {
      variant: {
        google:
          "bg-[#F1F3F4] text-neutral-900 hover:opacity-[0.8] hover:shadow-md",
        auth: "bg-blue-600 text-neutral-100 hover:opacity-[0.8] hover:shadow-md",
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
  iconNode?: StaticImport;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size, type, iconNode, disabled, variant, className, children, ...props },
    ref,
  ) => {
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
        {iconNode ? <Image className="h-6 w-6" src={iconNode} alt="" /> : null}
        &nbsp;
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
