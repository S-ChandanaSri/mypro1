import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";

export interface BackgroundContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  backgroundImage: string;
  overlay?: string;
}

const BackgroundImageContainer = forwardRef<
  HTMLDivElement,
  BackgroundContainerProps
>(({ backgroundImage, className, children, ...props }, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-cover bg-center" {...props}>
      <Image
        alt="authImage"
        objectFit="cover"
        layout="fill"
        src={backgroundImage}
      />
      <div className={cn("absolute inset-0", className)}>{children}</div>
    </div>
  );
});

BackgroundImageContainer.displayName = "BackgroundImageContainer";
export default BackgroundImageContainer;
