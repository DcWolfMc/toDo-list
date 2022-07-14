import { InputHTMLAttributes } from "react";
import { Check } from "phosphor-react";
import { FunctionComponent, useState } from "react";
import styles from "./CustomCheckbox.module.css";
interface CustomCheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
export const CustomCheckbox: FunctionComponent<CustomCheckboxProps> = ({
  label = "Don't you dare to check me!",
  ...props
}) => {
  return (
    <label 
      className={`${props.disabled ? styles.checkboxDisabled : styles.checkbox}`}
    >
      <input disabled={props.disabled} type="checkbox" onChange={props.onChange} />
      <span {...props}
        className={`${styles.checkboxBox} ${
          props.checked && styles["checkboxBox--active"]
        }`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
      >
        {props.checked&& <Check />}
      </span>
      {label}
    </label>
  );
};
