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

export type AllowedInputTypes = Exclude<
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
  type1?: AllowedInputTypes;
  onChange?: (value: string, evt?: ChangeEvent<HTMLInputElement>) => void;
  name1?: string;
  inputProps1?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label2: string;
  value2?: string;
  type2?: AllowedInputTypes;
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

export interface IInputGroupWithCheckbox {
  // Input
  checkboxLabel?: string;
  inputValue?: string;
  inputLabel: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  // Checkbox
  checkboxName?: string;
  checkboxValue?: boolean;
  checkboxProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  onChange?: (
    value: string | boolean,
    evt?: ChangeEvent<HTMLInputElement>
  ) => void;
}

export const InputGroupWithCheckbox = ({
  checkboxLabel,
  checkboxValue,
  checkboxName,
  inputValue,
  inputLabel,
  inputProps,
  checkboxProps,
  onChange,
}: IInputGroupWithCheckbox) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (evt) => {
      const {
        target: { checked },
      } = evt;
      if (typeof onChange === "function") {
        onChange(checked, evt);
      }
    },
    [onChange]
  );
  return (
    <InputGroup
      type="text"
      label={inputLabel}
      value={inputValue}
      onChange={onChange}
      inputProps={inputProps}
    >
      <div className="form-check mx-2">
        <input
          className="form-check-input"
          type="checkbox"
          name={checkboxName}
          checked={checkboxValue}
          onChange={handleChange}
          {...checkboxProps}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {checkboxLabel}
        </label>
      </div>
    </InputGroup>
  );
};
