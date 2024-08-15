import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

const backgroundContainerVariants = cva("min-h-screen bg-cover bg-center", {
  variants: {
    padding: {
      none: "",
      sm: "p-4",
      md: "p-8",
      lg: "p-16",
    },
  },
  defaultVariants: {
    padding: "md",
  },
});

export interface BackgroundContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backgroundContainerVariants> {
  ref?: React.Ref<HTMLDivElement>;
  backgroundImage: string;
  overlay?: string;
}

const BackgroundImageContainer = forwardRef<
  HTMLDivElement,
  BackgroundContainerProps
>(({ backgroundImage, padding, className, children, ...props }, ref) => {
  const bgImageStyle = { backgroundImage: `url('${backgroundImage}')` };

  return (
    <div
      ref={ref}
      className={backgroundContainerVariants({ padding })}
      style={bgImageStyle}
      {...props}
    >
      <div className={cn("absolute inset-0", className)}>{children}</div>
    </div>
  );
});

BackgroundImageContainer.displayName = "BackgroundImageContainer";
export default BackgroundImageContainer;
