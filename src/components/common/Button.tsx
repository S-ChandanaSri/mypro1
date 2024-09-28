"use client";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  `font-serif flex items-center justify-center text-md text-center shadow-sm transition-all duration-200 font-medium`,
  {
    variants: {
      variant: {
        google:
          "bg-[#F1F3F4] text-neutral-900 hover:opacity-[0.8] hover:shadow-md",
        auth: "bg-blue-600 text-neutral-100 hover:opacity-[0.8] hover:shadow-md",
        icon: "bg-transparent shadow-none outline outline-2 aspect-square outline-neutral-50 backdrop-blur-md",
        link: "text-secondary-600 hover:text-secondary-700 shadow-none",
        base: "bg-transparent text-neutral-50 shadow-none outline outline-1 hover:bg-neutral-50/20",
        baseDark:
          "bg-neutral-50 text-neutral-950 shadow-none hover:bg-neutral-50/80",
        card: "w-32 h-10 text-neutral-50 border-1 rounded-md bg-[#002855]",
      },
      size: {
        full: "w-full py-6 rounded-xl",
        md: "px-6 py-3 rounded-lg",
        sm: "w-20 h-20 rounded-3xl",
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
  preIconNode?: StaticImport;
  postIconNode?: StaticImport;
  link?: string;
  iconSize?: number;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      type,
      preIconNode,
      postIconNode,
      link,
      iconSize,
      disabled,
      variant,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const router = useRouter();
    const getIconNode = (iconNode?: StaticImport) => {
      return (
        iconNode && (
          <Image
            className={`${variant == "baseDark" && "invert"}`}
            width={iconSize ?? 24}
            height={iconSize ?? 24}
            src={iconNode}
            alt=""
          />
        )
      );
    };

    const handleClick = () => {
      if (link) {
        router.push(link);
      } else {
        props.onClick;
      }
    };
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={handleClick}
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
        {getIconNode(preIconNode)}
        {children && <>&nbsp;{children}&nbsp;</>}
        {getIconNode(postIconNode)}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;