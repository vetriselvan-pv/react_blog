import { useState, type FocusEvent, type InputHTMLAttributes } from "react";

export interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  info?: string;
}

export const InputField: React.FC<IInputFieldProps> = ({
  label,
  info,
  type = "text",
  id,
  name,
  value,
  onChange,
  onInput,
  onBlur,
  onFocus,
  disabled,
  readOnly,
  error,
  className,
  ...props
}) => {
  const [isfocused, setFocus] = useState<boolean>(false);

  const focused = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocus(true);
    onFocus?.(e);
  };

  const blurred = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocus(false);
    onBlur?.(e);
  };

  const inputClasses = [
    "base-input",
    className,
    error ? "input-error" : "",
    isfocused ? "input-focus" : "",
    disabled ? "input-disabled" : "",
    readOnly ? "input-readonly" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="input-field-wrapper">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        {...props}
        type={type}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        id={id}
        value={value}
        onFocus={focused}
        onChange={onChange}
        onInput={onInput}
        onBlur={blurred}
        className={inputClasses}
      />
      {error ? (
        <small className="input-field-error">{error}</small>
      ) : (
        info && <small className="input-field-info">{info}</small>
      )}
    </div>
  );
};
