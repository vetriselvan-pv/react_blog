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
  const [focus, setFocus] = useState<boolean>(false);

  const focused = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocus(true);
    onFocus?.(e);
  };

  const blured = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocus(false);
    onBlur?.(e);
  };

  return (
    <>
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
        onBlur={blured}
        className={`base-input ${className}  ${error} ? "input-error" : ""   ${focus} ? "input-focus" : ""   ${disabled} ? "input-disabled" : ""  ${readOnly} ? "input-readonly" : "" `}
      />
      {info && <small className="input-field-info">{info}</small>}
      {error && <small className="input-field-error">{error}</small>}
    </>
  );
};
