import React, { ReactNode, useCallback, useState } from "react";
import { SVGIcon } from "../atoms/Icon";
import {
  DoubleInputGroup,
  InputGroup,
  InputGroupWithCheckbox,
  TextAreaGroup,
} from "../elements/InputGroup";

export interface ReceiptFormData {
  tenantName: string;
  fromDate: string;
  toDate: string;
  rentAmount: string;
  includesMaintenance: boolean;
  address: string;
  landlordName: string;
  landlordPan: string;
}

export interface IRentReceiptForm {
  onClickPrint: (formData: ReceiptFormData) => void;
  onClickShare: React.MouseEventHandler<HTMLButtonElement>;
}

export const RentReceiptForm = ({
  onClickPrint,
  onClickShare: handleClickShare,
}: IRentReceiptForm) => {
  const [state, setState] = useState<ReceiptFormData>({
    tenantName: "",
    fromDate: "",
    toDate: "",
    rentAmount: "",
    includesMaintenance: false,
    address: "",
    landlordName: "",
    landlordPan: "",
  });

  const {
    tenantName,
    fromDate,
    toDate,
    rentAmount,
    includesMaintenance,
    address,
    landlordName,
    landlordPan,
  } = state;

  const handleChange = useCallback(
    (
      name: string,
      value: string | boolean,
      evt?:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | undefined
    ) => {
      if (name) {
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    },
    []
  );

  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
      onClickPrint(state);
    },
    [onClickPrint, state]
  );

  return (
    <div>
      <h3 className="text-center h3">Rent Receipt Printer</h3>
      <form noValidate onSubmit={handleSubmit}>
        <InputGroup
          type="text"
          label="Tenant's Name"
          name="tenantName"
          value={tenantName}
          onChange={handleChange}
          inputProps={{
            required: true,
          }}
        />

        {/* From & To */}
        <DoubleInputGroup
          type1="date"
          label1="From"
          name1="fromDate"
          value1={fromDate}
          label2="To"
          type2="date"
          name2="toDate"
          value2={toDate}
          onChange={handleChange}
        />

        {/* Amount & includes-maintenance-checkbox */}
        <InputGroupWithCheckbox
          inputLabel="Amount"
          inputName="rentAmount"
          inputValue={rentAmount}
          checkboxLabel="Includes Maintenance"
          checkboxName="includesMaintenance"
          checkboxValue={includesMaintenance}
          onChange={handleChange}
        />

        <TextAreaGroup
          label="Address"
          name="address"
          onChange={handleChange}
          value={address}
        />

        <InputGroup
          type="text"
          label="Landlord's Name"
          name="landlordName"
          value={landlordName}
          onChange={handleChange}
        />
        <InputGroup
          type="text"
          label="Landlord's PAN #"
          name="landlordPan"
          value={landlordPan}
          onChange={handleChange}
        />
        <div className="flex-row">
          <button
            type="submit"
            className="btn btn-primary rounded-0 d-print-none d-inline-flex"
          >
            <SVGIcon type="printer-fill" />
          </button>
          <button
            type="button"
            className="btn btn-success rounded-0 d-print-none mx-2 d-inline-flex"
            onClick={handleClickShare}
          >
            <SVGIcon type="share-fill" />
          </button>
        </div>
      </form>
    </div>
  );
};

export const RentReceiptFormWithValidation = ({
  onClickPrint,
  onClickShare,
}: IRentReceiptForm) => {
  const [{ validationMessages }, setState] = useState<{
    validationMessages: ReactNode[];
  }>({
    validationMessages: [],
  });
  const handleOnClickPrint = useCallback((formData: ReceiptFormData) => {
    const validationMessages = validateFormData(formData);
    setState((prevState) => ({
      ...prevState,
      validationMessages,
    }));
  }, []);

  return (
    <div>
      <RentReceiptForm
        onClickPrint={handleOnClickPrint}
        onClickShare={onClickShare}
      />
      {validationMessages.length > 0 && (
        <div
          className="alert alert-warning alert-dismissible fade show my-2"
          role="alert"
        >
          {validationMessages.map((validationMessage, idx) => (
            <p className="p-0 m-0" key={`validaiton-messages-${idx}`}>
              {validationMessage}
            </p>
          ))}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
};

const RequiredValidationMessage = ({ label }: { label: string }) => (
  <>
    <strong>{label}</strong> is required
  </>
);

const validateFormData = ({
  tenantName,
  rentAmount,
  address,
  landlordName,
  landlordPan,
  fromDate,
  toDate,
}: ReceiptFormData): ReactNode[] => {
  const toBeforeFromError =
    Boolean(fromDate) &&
    Boolean(toDate) &&
    new Date(fromDate) > new Date(toDate)
      ? [
          <>
            <strong>From Date</strong> should be before <strong>To date</strong>
          </>,
        ]
      : [];

  const isRequiredErrors = [
    { label: "Address", field: address },
    { label: "Rent Amount", field: rentAmount },
    { label: "Tenant's Name", field: tenantName },
    { label: "From Date", field: tenantName },
    { label: "To Date", field: tenantName },
    { label: "Landlord's Name", field: landlordName },
    { label: "Landlord's PAN#", field: landlordPan },
  ].map(({ label, field }) =>
    Boolean(field)
      ? []
      : [<RequiredValidationMessage key={label} label={label} />]
  );

  const errors = [...toBeforeFromError, ...isRequiredErrors];
  return errors;
};
