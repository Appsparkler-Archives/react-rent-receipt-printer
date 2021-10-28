import { useState, useCallback, useMemo } from "react";
import { IRentReceiptProps } from "../RentReceipt";
import {
  ReceiptFormData,
  RentReceiptFormWithValidation,
} from "../RentReceiptForm";
import { getRentReceiptInfo } from "../logic/getRentReceiptInfo";
import { RentReceipt } from "../RentReceipt";
import { SVGIcon } from "../atoms/Icon";
import "./styles.css";

export const RentReceiptPrinterApp = () => {
  const [{ rentReceiptFormData }, setState] = useState<{
    rentReceiptsInfo?: IRentReceiptProps;
    rentReceiptFormData?: ReceiptFormData;
  }>({
    rentReceiptsInfo: undefined,
    rentReceiptFormData: undefined,
  });

  const onChangeData = useCallback((formData: ReceiptFormData) => {
    setState((prevState) => ({
      ...prevState,
      rentReceiptFormData: formData,
    }));
  }, []);

  const parsedRentReceiptInfo = useMemo(
    () =>
      rentReceiptFormData &&
      getRentReceiptInfo(
        rentReceiptFormData.fromDate,
        rentReceiptFormData.noOfMonths
      ),
    [rentReceiptFormData]
  );

  const rentReceipts = useMemo<JSX.Element[] | null | boolean[]>(() => {
    return parsedRentReceiptInfo && rentReceiptFormData
      ? parsedRentReceiptInfo.map((rentReceiptInfo, idx) => {
          const rentReceiptProps: IRentReceiptProps = {
            address: rentReceiptFormData.address,
            amount: rentReceiptFormData.rentAmount,
            fromDt: rentReceiptFormData.fromDate,
            landlordName: rentReceiptFormData.landlordName,
            tenantName: rentReceiptFormData.tenantName,
            pageBreakAfter:
              (idx + 1) % 3 === 0 && parsedRentReceiptInfo.length - idx > 3,
            printOnly: true,
            toDt: rentReceiptInfo.toDt,
            month: rentReceiptInfo.month,
            panNo: rentReceiptFormData.landlordPan,
            includesMaintenance: rentReceiptFormData.includesMaintenance,
          };
          return <RentReceipt {...rentReceiptProps} />;
        })
      : null;
  }, [parsedRentReceiptInfo, rentReceiptFormData]);

  const handleClickPrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-4 col-xxl-3">
            <RentReceiptFormWithValidation onChange={onChangeData} />
            <button
              className="btn btn-success d-print-none"
              onClick={handleClickPrint}
              disabled={!rentReceipts}
            >
              <span className="d-inline-flex align-items-center">
                <SVGIcon type="printer-fill" className="me-1" />
                Print
              </span>
            </button>
          </div>
        </div>
      </div>
      {rentReceipts}
    </>
  );
};
