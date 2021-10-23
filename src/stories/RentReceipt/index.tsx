import React, { useMemo } from "react";
import { v4 as uuid } from "uuid";

export const Strong = ({ t }: { t: string }) => <strong>{t}</strong>;

export interface IRentReceiptProps {
  amount: string;
  tenantName: string;
  address: string;
  month: string;
  fromDt: string;
  toDt: string;
  landlordName: string;
  panNo: string;
  printOnly: boolean;
  pageBreakAfter: boolean;
  includesMaintenance: boolean;
}

/**
 * The rent receipt
 */
export const RentReceipt: React.FC<IRentReceiptProps> = ({
  amount,
  tenantName,
  address,
  month,
  fromDt,
  toDt,
  landlordName,
  panNo,
  printOnly,
  pageBreakAfter,
  includesMaintenance,
}) => {
  const { receiptNumber, wrapperClasses } = useMemo(
    () => ({
      receiptNumber: uuid().substr(-12),
      wrapperClasses: `overflow-auto d-print-block mt-2 ${
        pageBreakAfter ? "page-break-after" : ""
      } ${printOnly ? "d-none" : ""}`.trim(),
    }),
    [pageBreakAfter, printOnly]
  );
  return (
    <div className={wrapperClasses}>
      <div className="border-2 border p-2 m-1 border-secondary">
        <div className="d-flex justify-content-between">
          <div>
            <h2>RENT RECEIPT</h2>
            <h6>{month}</h6>
          </div>
          <div className="text-end">
            <div>
              <Strong t="Date: " />
              {toDt}
            </div>
            <div>
              <Strong t="Receipt No: " /> {receiptNumber}{" "}
            </div>
          </div>
        </div>
        <div className="my-4">
          Received sum of <Strong t={`₹ ${amount} `} />
          from <Strong t={tenantName} /> towards the rent{" "}
          {includesMaintenance ? "and maintenance" : ""} of property located at{" "}
          <Strong t={address} /> for the period from <Strong t={fromDt} /> to{" "}
          <Strong t={toDt} />.
        </div>
        <div className="mb-4">
          <strong>{landlordName} (Landlord)</strong>
        </div>{" "}
        <div>
          {" "}
          <strong>PAN No:</strong> {panNo}
        </div>
      </div>
    </div>
  );
};
