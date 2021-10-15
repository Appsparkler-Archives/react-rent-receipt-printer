import {
  useState,
  useEffect,
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useCallback,
} from "react";

export interface IInputGroupProps {
  label: string;
  value: string;
  type: Exclude<
    HTMLInputTypeAttribute,
    | "button"
    | "checkbox"
    | "radio"
    | "color"
    | "file"
    | "hidden"
    | "image"
    | "range"
    | "reset"
    | "submit"
  >;
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
  value,
}: IInputGroupProps) => {
  const [{ $value }, setState] = useState({
    $value: value,
  });
  const handleChange = useCallback(({ target: { value } }) => {
    if (typeof value === "string") {
      setState((prevState) => ({
        ...prevState,
        $value: value,
      }));
    }
  }, []);

  useEffect(() => {
    if (typeof $value === "string") {
      onChange($value);
    }
  }, [$value, onChange]);

  return (
    <div className="input-group input-group-sm mb-3">
      <span className="input-group-text" id="inputGroup-sizing-sm">
        {label}
      </span>
      <input
        type={type}
        className="form-control"
        value={$value}
        onChange={handleChange}
        {...inputProps}
      />
    </div>
  );
};
