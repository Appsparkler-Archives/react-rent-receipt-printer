import {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";

export interface IInputGroupProps {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const InputGroup = ({
  label,
  inputProps,
  onChange,
}: IInputGroupProps) => (
  <div className="input-group input-group-sm mb-3">
    <span className="input-group-text" id="inputGroup-sizing-sm">
      {label}
    </span>
    <input
      type="text"
      className="form-control"
      onChange={onChange}
      {...inputProps}
    />
  </div>
);
