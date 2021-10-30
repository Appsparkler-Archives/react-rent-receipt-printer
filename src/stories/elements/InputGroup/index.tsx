import { map } from "../../logic/lodash";
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
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  useRef,
  LegacyRef,
} from "react";
import ReactDayPickerInput from "react-day-picker/DayPickerInput";
import RDPMomentUtils from "react-day-picker/moment";
import "react-day-picker/lib/style.css";

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

export type CustomChangeEventHandler<HTMLElement = HTMLInputElement> = (
  name: string,
  value: string | boolean,
  evt?: ChangeEvent<HTMLElement>
) => void;

export interface IInputGroupProps {
  label: string;
  value?: string;
  type?: AllowedInputTypes;
  children?: ReactNode;
  name: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  onChange?: CustomChangeEventHandler;
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
      onChange(name, $value, $evt);
    }
  }, [$value, onChange, $evt, name]);

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

  onChange?: CustomChangeEventHandler;
}

export const DoubleInputGroup = ({
  inputProps1,
  label1,
  type1,
  name1,
  value1,
  inputProps2,
  label2,
  type2,
  name2,
  value2,
  onChange,
}: IDoubleInputGroupProps) => {
  const [
    { $value1, $value2, $value, $evt, $name, $name1, $name2 },
    setState,
  ] = useState<{
    $value1?: string;
    $value2?: string;
    $value: string;
    $name1?: string;
    $name2?: string;
    $name: string;
    $evt?: ChangeEvent<HTMLInputElement>;
  }>({
    $value1: value1,
    $value2: value2,
    $value: "",
    $evt: undefined,
    $name: "",
    $name1: name1,
    $name2: name2,
  });

  const handleChange1 = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (evt) => {
      const {
        target: { value, name },
      } = evt;
      if (typeof value === "string") {
        setState((prevState) => ({
          ...prevState,
          $value1: value,
          $value: value,
          $name1: name,
          $name: name,
          $evt: evt,
        }));
      }
    },
    []
  );

  const handleChange2 = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (evt) => {
      const {
        target: { value, name },
      } = evt;
      if (typeof value === "string") {
        setState((prevState) => ({
          ...prevState,
          $value2: value,
          $value: value,
          $name2: name,
          $name: name,
          $evt: evt,
        }));
      }
    },
    []
  );

  useEffect(() => {
    if (Boolean($value) && typeof onChange === "function" && Boolean($name)) {
      onChange($name, $value, $evt);
    }
  }, [$value, onChange, $evt, $name]);

  return (
    <div className="input-group input-group-sm mb-3">
      {/* INPUT 1 */}
      <span className="input-group-text" id="inputGroup-sizing-sm">
        {label1}
      </span>
      <input
        type={type1}
        name={$name1}
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
        name={$name2}
        className="form-control"
        value={$value2}
        onChange={handleChange2}
        {...inputProps2}
      />
    </div>
  );
};

export type OptionType = { label: string | number; value: string | number };

export interface IInputGroupWithSelect {
  inputLabel: string;
  inputValue?: string;
  inputType?: AllowedInputTypes;
  inputName?: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

  selectLabel: string;
  selectValue?: string;
  selectName?: string;
  selectProps?: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  options: OptionType[];

  onChange?: CustomChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
}

export const InputGroupWithSelect = ({
  inputProps,
  inputLabel,
  inputType,
  inputName,
  inputValue,
  selectProps,
  selectLabel,
  selectName,
  selectValue,
  options = [],
  onChange,
}: IInputGroupWithSelect) => {
  const [
    { $value1, $value2, $value, $evt, $name, $name1, $name2 },
    setState,
  ] = useState<{
    $value1?: string;
    $value2?: string;
    $value: string;
    $name1?: string;
    $name2?: string;
    $name: string;
    $evt?: ChangeEvent<HTMLSelectElement | HTMLInputElement>;
  }>({
    $value1: inputValue,
    $value2: selectValue,
    $value: "",
    $evt: undefined,
    $name: "",
    $name1: inputName,
    $name2: selectName,
  });

  const handleChange1 = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (evt) => {
      const {
        target: { value, name },
      } = evt;
      if (typeof value === "string") {
        setState((prevState) => ({
          ...prevState,
          $value1: value,
          $value: value,
          $name1: name,
          $name: name,
          $evt: evt as ChangeEvent<HTMLInputElement>,
        }));
      }
    },
    []
  );

  const handleChange2 = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (evt) => {
      const {
        target: { value, name },
      } = evt;
      if (typeof value === "string") {
        setState((prevState) => ({
          ...prevState,
          $value2: value,
          $value: value,
          $name2: name,
          $name: name,
          $evt: evt as ChangeEvent<HTMLSelectElement>,
        }));
      }
    },
    []
  );

  useEffect(() => {
    if (Boolean($value) && typeof onChange === "function" && Boolean($name)) {
      onChange($name, $value, $evt);
    }
  }, [$value, onChange, $evt, $name]);

  return (
    <div className="input-group input-group-sm mb-3">
      {/* INPUT 1 */}
      <span className="input-group-text" id="inputGroup-sizing-sm">
        {inputLabel}
      </span>
      <input
        type={inputType}
        name={$name1}
        className="form-control"
        value={$value1}
        onChange={handleChange1}
        {...inputProps}
      />
      {/* INPUT 2 */}
      <span className="input-group-text" id="inputGroup-sizing-sm">
        {selectLabel}
      </span>
      <select
        name={$name2}
        className="form-control"
        value={$value2}
        onChange={handleChange2}
        {...selectProps}
      >
        {map<OptionType, ReactNode>(
          ({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ),
          options
        )}
      </select>
    </div>
  );
};

export interface IInputGroupWithCheckbox {
  // Input
  inputLabel: string;
  checkboxLabel?: string;
  inputValue?: string;
  inputName: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  // Checkbox
  checkboxName: string;
  checkboxValue?: boolean;
  checkboxProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  onChange?: CustomChangeEventHandler;
}

export const InputGroupWithCheckbox = ({
  checkboxLabel,
  checkboxValue,
  checkboxName,
  inputName,
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
        onChange(checkboxName, checked, evt);
      }
    },
    [checkboxName, onChange]
  );
  return (
    <InputGroup
      type="text"
      name={inputName}
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

export interface ITextareaGroupProps {
  label: string;
  name: string;
  textareaProps?: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  rows?: number;
  value?: string;
  onChange?: CustomChangeEventHandler<HTMLTextAreaElement>;
}

export const TextAreaGroup = ({
  textareaProps,
  label,
  name,
  value,
  rows = 3,
  onChange,
}: ITextareaGroupProps) => {
  const [{ $value, $evt }, setState] = useState<{
    $value?: string;
    $evt?: ChangeEvent<HTMLTextAreaElement>;
  }>({
    $value: value,
    $evt: undefined,
  });
  const handleChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
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
      onChange(name, $value, $evt);
    }
  }, [$value, onChange, $evt, name]);

  return (
    <div className="input-group input-group-sm mb-3">
      <span className="input-group-text" id="inputGroup-sizing-sm">
        {label}
      </span>
      <textarea
        name={name}
        className="form-control"
        value={$value}
        onChange={handleChange}
        rows={rows}
        {...textareaProps}
      />
    </div>
  );
};

export interface IDayPickerInputProps {}

export const DayPickerInput = (props: IDayPickerInputProps) => {
  const ref: LegacyRef<ReactDayPickerInput> = useRef(null);
  return (
    <div className="input-group input-group-sm mb-3">
      <span className="input-group-text" id="inputGroup-sizing-sm">
        From Date
      </span>
      <ReactDayPickerInput
        inputProps={{
          className: "form-control",
        }}
        onDayChange={console.log}
        formatDate={RDPMomentUtils.formatDate}
        parseDate={RDPMomentUtils.parseDate}
        format="DD/MM/YYYY"
        placeholder="dd/mm/yyyy"
        ref={ref}
      />
      <button
        onClick={() => ref.current?.showDayPicker()}
        className="btn btn-secondary"
        aria-label="Show From Date Picker"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-calendar-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
        </svg>
      </button>
    </div>
  );
};
