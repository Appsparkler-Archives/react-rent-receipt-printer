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

export interface IDoubleInputGroupProps {
  label1: string;
  value1?: string;
  type1?: Exclude<
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
  onChange?: (value: string, evt?: ChangeEvent<HTMLInputElement>) => void;
  name1?: string;
  inputProps1?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label2: string;
  value2?: string;
  type2?: Exclude<
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
  onChange2?: (value: string, evt?: ChangeEvent<HTMLInputElement>) => void;
  name2?: string;
  inputProps2?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const DoubleInputGroup = ({
  inputProps1,
  label1,
  type1,
  name1,
  value1,
  onChange,
  inputProps2,
  label2,
  type2,
  name2,
  value2,
  onChange2,
}: IDoubleInputGroupProps) => {
  const [{ $value1, $value2, $value, $evt }, setState] = useState<{
    $value1?: string;
    $value2?: string;
    $value?: string;
    $evt?: ChangeEvent<HTMLInputElement>;
  }>({
    $value1: value1,
    $value2: value2,
    $value: undefined,
    $evt: undefined,
  });

  const handleChange1 = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (evt) => {
      const {
        target: { value },
      } = evt;
      if (typeof value === "string") {
        setState((prevState) => ({
          ...prevState,
          $value1: value,
          $value: value,
          $evt: evt,
        }));
      }
    },
    []
  );

  const handleChange2 = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (evt) => {
      const {
        target: { value },
      } = evt;
      if (typeof value === "string") {
        setState((prevState) => ({
          ...prevState,
          $value2: value,
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
      {/* INPUT 1 */}
      <span className="input-group-text" id="inputGroup-sizing-sm">
        {label1}
      </span>
      <input
        type={type1}
        name={name1}
        className="form-control"
        value={$value1}
        onChange={handleChange1}
        {...inputProps1}
      />
      {/* INPUT 2 */}
      <span className="input-group-text" id="inputGroup-sizing-sm">
        {label2}
      </span>
      <input
        type={type2}
        name={name2}
        className="form-control"
        value={$value2}
        onChange={handleChange2}
        {...inputProps2}
      />
    </div>
  );
};
