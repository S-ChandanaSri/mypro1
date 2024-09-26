import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const formVariants = cva(
  `px-8 py-12 rounded-2xl flex flex-col space-y-4 font-serif text-md font-normal placeholder:font-normal shadow-xl`,
  {
    variants: {
      variant: {

        auth: `sm:w-[480px] w-[95vw] bg-white text-neutral-950 space-y-6 px-7 pt-8 pb-12`,
        contactUs: `md:w-[30rem] px-1 md:px-2 py-2 md:py-0 space-y-3`,

      },
    },
  },
);

export interface FormContainerProps
  extends HTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {
  ref?: React.Ref<HTMLFormElement>;
}

const FormContainer = forwardRef<HTMLFormElement, FormContainerProps>(
  ({ onSubmit, variant, className, children, ...props }, ref) => {
    return (
      <form
        ref={ref}
        onSubmit={onSubmit}
        className={cn(formVariants({ variant }), className)}
        {...props}
      >
        {children}
      </form>
    );
  },
);

FormContainer.displayName = "FormContainer";
export default FormContainer;
