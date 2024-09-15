import React, { HTMLAttributes, forwardRef } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  ref?: React.Ref<HTMLParagraphElement>;
}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={className} {...props}>
        {children}
      </p>
    );
  },
);

Typography.displayName = "Typography";
export default Typography;
