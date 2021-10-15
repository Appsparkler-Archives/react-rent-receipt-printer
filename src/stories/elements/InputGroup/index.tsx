import {
  ChangeEventHandler,
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useCallback,
} from "react";

export interface IInputGroupProps {
  label: string;
  type: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
  inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const InputGroup = ({
  inputProps,
  label,
  type,
  onChange,
}: IInputGroupProps) => {
  const handleChange = useCallback(
    ({ target: { value } }) => {
      if (typeof value === "string") {
        onChange(value);
      }
    },
    [onChange]
  );
  return (
    <div className="input-group input-group-sm mb-3">
      <span className="input-group-text" id="inputGroup-sizing-sm">
        {label}
      </span>
      <input
        type={type}
        className="form-control"
        onChange={handleChange}
        {...inputProps}
      />
    </div>
  );
};
