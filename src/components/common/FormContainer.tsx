import React, { HTMLAttributes, forwardRef } from "react";

export interface FormContainerProps extends HTMLAttributes<HTMLFormElement> {
  ref?: React.Ref<HTMLFormElement>;
}

const FormContainer = forwardRef<HTMLFormElement, FormContainerProps>(
  ({ onSubmit, className, children, ...props }, ref) => {
    return (
      <form ref={ref} onSubmit={onSubmit} className={className} {...props}>
        {children}
      </form>
    );
  },
);

FormContainer.displayName = "FormContainer";
export default FormContainer;
