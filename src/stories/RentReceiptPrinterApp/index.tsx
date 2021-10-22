import { useState, useCallback, useMemo, useEffect } from "react";
import { IRentReceiptProps } from "../RentReceipt";
import {
  ReceiptFormData,
  RentReceiptFormWithValidation,
} from "../RentReceiptForm";
import { map } from "../logic/lodash";
import { getRentReceiptInfo } from "../logic/getRentReceiptInfo";
import { RentReceipt } from "../RentReceipt";

export const RentReceiptPrinterApp = () => {
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

  const rentReceipts = useMemo<JSX.Element[] | null>(() => {
    return parsedRentReceiptInfo && rentReceiptFormData
      ? map((rentReceiptInfo) => {
          const rentReceiptProps: IRentReceiptProps = {
            address: rentReceiptFormData.address,
            amount: rentReceiptFormData.rentAmount,
            fromDt: rentReceiptFormData.fromDate,
            toDt: rentReceiptInfo.toDt,
            month: rentReceiptInfo.month,
            landlordName: rentReceiptFormData.landlordName,
            panNo: rentReceiptFormData.landlordPan,
            printOnly: false,
            tenantName: rentReceiptFormData.tenantName,
          };
          return <RentReceipt {...rentReceiptProps} />;
        }, parsedRentReceiptInfo)
      : null;
  }, [parsedRentReceiptInfo, rentReceiptFormData]);

  useEffect(() => {
    rentReceipts && window.print();
  }, [rentReceipts]);

  return (
    <div>
      <RentReceiptFormWithValidation
        onClickPrint={handleClickPrint}
        onClickShare={handleClickShare}
      />
      {rentReceipts}
    </div>
  );
};
