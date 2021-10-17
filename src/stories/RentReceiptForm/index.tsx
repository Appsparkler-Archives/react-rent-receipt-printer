import React, { useCallback, useState } from "react";
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
