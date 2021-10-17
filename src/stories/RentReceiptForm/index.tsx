import React, { useCallback, useState } from "react";
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

  const handleClickPrint = useCallback(() => {
    onClickPrint(state);
  }, [onClickPrint, state]);
  return (
    <div>
      <h3 className="text-center h3">Rent Receipt Printer</h3>
      <form>
        <InputGroup
          type="text"
          label="Tenant's Name"
          name="tenantName"
          value={tenantName}
          onChange={handleChange}
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
            type="button"
            className="btn btn-primary rounded-0 d-print-none d-inline-flex"
            onClick={handleClickPrint}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-printer-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
              <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            </svg>
          </button>
          <button
            type="button"
            className="btn btn-success rounded-0 d-print-none mx-2 d-inline-flex"
            onClick={handleClickShare}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-share-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};
