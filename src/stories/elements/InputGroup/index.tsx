import {
  useState,
  useEffect,
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useCallback,
  ReactNode,
  ChangeEventHandler,
  ChangeEvent,
} from "react";

export interface IInputGroupProps {
  label: string;
  value?: string;
  type?: Exclude<
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
  children?: ReactNode;
  onChange?: (value: string, evt?: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const InputGroup = ({
  inputProps,
  label,
  type,
  name,
  value,
  children,
  onChange,
}: IInputGroupProps) => {
  const [{ $value, $evt }, setState] = useState<{
    $value?: string;
    $evt?: ChangeEvent<HTMLInputElement>;
  }>({
    $value: value,
    $evt: undefined,
  });
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (evt) => {
      const {
        target: { value },
      } = evt;
      if (typeof value === "string") {
        setState((prevState) => ({
          ...prevState,
          $value: value,
          $evt: evt,
        }));
      }
    },
    []
  );

  useEffect(() => {
    if (typeof $value === "string" && typeof onChange === "function") {
      onChange($value, $evt);
    }
  }, [$value, onChange, $evt]);

  return (
    <div className="input-group input-group-sm mb-3">
      <span className="input-group-text" id="inputGroup-sizing-sm">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="form-control"
        value={$value}
        onChange={handleChange}
        {...inputProps}
      />
      {children}
    </div>
  );
};
