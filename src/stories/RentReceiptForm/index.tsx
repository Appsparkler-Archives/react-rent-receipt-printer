import React, { ReactNode, useCallback, useEffect, useState } from "react";
import {
  InputGroup,
  InputGroupWithCheckbox,
  InputGroupWithSelect,
  OptionType,
  TextAreaGroup,
} from "../elements/InputGroup";
import { filter, map, times } from "../logic/lodash";

export interface ReceiptFormData {
  tenantName: string;
  fromDate: string;
  noOfMonths: string;
  rentAmount: string;
  includesMaintenance: boolean;
  address: string;
  landlordName: string;
  landlordPan: string;
}

export interface IRentReceiptForm {
  onChange: (formData: ReceiptFormData) => void;
}

const oneToTwelve: OptionType[] = times<OptionType>(
  (n, x = n + 1) => ({
    label: x,
    value: x,
  }),
  12
);

export const RentReceiptForm = ({ onChange }: IRentReceiptForm) => {
  const [state, setState] = useState<ReceiptFormData>({
    tenantName: "",
    fromDate: "",
    noOfMonths: "12",
    rentAmount: "",
    includesMaintenance: false,
    address: "",
    landlordName: "",
    landlordPan: "",
  });

  const {
    tenantName,
    fromDate,
    noOfMonths,
    rentAmount,
    includesMaintenance,
    address,
    landlordName,
    landlordPan,
  } = state;

  const handleChange = useCallback((name: string, value: string | boolean) => {
    if (name) {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }, []);

  useEffect(() => {
    onChange(state);
  }, [state, onChange]);

  return (
    <div>
      <h3 className="text-center h3">Rent Receipt Printer</h3>
      <form noValidate>
        <InputGroup
          type="text"
          label="Tenant's Name"
          name="tenantName"
          value={tenantName}
          onChange={handleChange}
          inputProps={{
            required: true,
            "aria-label": "Tenant's Name",
          }}
        />

        <InputGroupWithSelect
          inputLabel="From"
          inputName="fromDate"
          inputValue={fromDate}
          inputType="date"
          options={oneToTwelve}
          selectLabel="# of months"
          selectName="noOfMonths"
          inputProps={{
            "aria-label": "Type in From Date",
          }}
          selectValue={noOfMonths}
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
          rows={5}
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
      </form>
    </div>
  );
};

export const RentReceiptFormWithValidation = ({
  onChange,
}: IRentReceiptForm) => {
  const [{ validationMessages }, setState] = useState<{
    validationMessages: ReactNode[];
  }>({
    validationMessages: [],
  });
  const handleOnClickPrint = useCallback(
    (formData: ReceiptFormData) => {
      const validationMessages = validateFormData(formData);
      setState((prevState) => ({
        ...prevState,
        validationMessages,
      }));
      if (validationMessages.length === 0) onChange(formData);
    },
    [onChange]
  );

  return (
    <div className="d-print-none">
      <RentReceiptForm onChange={handleOnClickPrint} />
      {validationMessages.length > 0 && (
        <div className="alert alert-warning show my-2 p-0" role="alert">
          <ul>
            {validationMessages.map((validationMessage, idx) => (
              <li
                className="p-0 m-0"
                key={`validaiton-messages-${validationMessage}-$`}
              >
                {validationMessage}
              </li>
            ))}
          </ul>
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
}: ReceiptFormData): ReactNode[] => {
  const fieldsAndLabels = [
    { label: "Address", field: address },
    { label: "Rent Amount", field: rentAmount },
    { label: "Tenant's Name", field: tenantName },
    { label: "From Date", field: fromDate },
    { label: "Landlord's Name", field: landlordName },
    { label: "Landlord's PAN#", field: landlordPan },
  ];

  const mappedFieldAndLabels = map(
    ({ label, field }) =>
      Boolean(field) ? (
        false
      ) : (
        <RequiredValidationMessage key={label} label={label} />
      ),
    fieldsAndLabels
  );
  const isRequiredErrors = filter((res) => Boolean(res), mappedFieldAndLabels);
  const errors = [...isRequiredErrors];
  return errors;
};
