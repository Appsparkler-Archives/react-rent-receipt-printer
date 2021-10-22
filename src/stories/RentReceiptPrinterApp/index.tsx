import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { IRentReceiptProps } from "../RentReceipt";
import {
  ReceiptFormData,
  RentReceiptFormWithValidation,
} from "../RentReceiptForm";
import { getRentReceiptInfo } from "../logic/getRentReceiptInfo";
import { RentReceipt } from "../RentReceipt";

export const RentReceiptPrinterApp = () => {
  const btnRef: React.LegacyRef<HTMLButtonElement> | undefined = useRef(null);

  const [{ rentReceiptFormData }, setState] = useState<{
    rentReceiptsInfo?: IRentReceiptProps;
    rentReceiptFormData?: ReceiptFormData;
  }>({
    rentReceiptsInfo: undefined,
    rentReceiptFormData: undefined,
  });

  const handleClickPrint = useCallback((formData: ReceiptFormData) => {
    setState((prevState) => ({
      ...prevState,
      rentReceiptFormData: formData,
    }));
    btnRef.current?.scrollIntoView();
  }, []);

  const handleClickShare = useCallback(() => {}, []);

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
            printOnly: false,
            toDt: rentReceiptInfo.toDt,
            month: rentReceiptInfo.month,
            panNo: rentReceiptFormData.landlordPan,
            includesMaintenance: rentReceiptFormData.includesMaintenance,
          };
          return <RentReceipt {...rentReceiptProps} />;
        })
      : null;
  }, [parsedRentReceiptInfo, rentReceiptFormData]);

  const handleClickPrint2 = useCallback(() => {
    window.print();
  }, []);

  useEffect(() => {
    rentReceipts && btnRef.current !== null && btnRef.current.scrollIntoView();
  }, [rentReceipts]);

  return (
    <div>
      <RentReceiptFormWithValidation
        onClickPrint={handleClickPrint}
        onClickShare={handleClickShare}
      />
      <button
        className="btn btn-success d-print-none"
        ref={btnRef}
        onClick={handleClickPrint2}
      >
        Print
      </button>
      {rentReceipts}
    </div>
  );
};
