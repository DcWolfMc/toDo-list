import { FunctionComponent, useState } from "react";
import styles from "./CustomCheckbox.module.css";
interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
}
export const Checkbox: FunctionComponent<CheckboxProps> = ({
  disabled = false,
  checked = false,
  label = "Don't you dare to check me!",
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label
      className={`${disabled ? styles.CheckboxDisabled : styles.Checkbox}`}
    >
      <input
        disabled={disabled}
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <span
        className={`${styles.checkboxBox} ${
          isChecked && styles["checkboxBox--active"]
        }`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
      />
      {label}
    </label>
  );
};
