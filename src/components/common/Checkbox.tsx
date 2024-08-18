import { cn } from "@/utils/cn";
import React, { forwardRef, HTMLAttributes, SetStateAction } from "react";

export interface CheckboxProps extends HTMLAttributes<HTMLLabelElement> {
  ref?: React.Ref<HTMLLabelElement>;
  label: string;
  value: boolean;
  setValue: React.Dispatch<SetStateAction<boolean>>;
}

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ label, value, setValue, className, ...props }, ref) => {
    return (
      <label className={cn("flex items-center space-x-2", className)} ref={ref}>
        <input type="checkbox" className="w-5 h-5" />
        <span>{label}</span>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
