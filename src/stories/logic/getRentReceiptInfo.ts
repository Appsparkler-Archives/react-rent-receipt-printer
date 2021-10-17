import moment from "moment";
import times from "lodash/times";
import map from "lodash/fp/map";

export interface IGetRentReciptInfo {
  month: string;
  fromDt: string;
  toDt: string;
}

export const getRentReceiptInfo = (
  fromDt: string,
  numberOfMonths: number
): IGetRentReciptInfo[] => {
  const getFromDt = (dt: string, idx: number) =>
    moment(dt).add(idx, "months").startOf("day");
  const results = map((idx) => {
    const $fromDtStartOfDay = getFromDt(fromDt, idx);
    const daysInMonth = $fromDtStartOfDay.daysInMonth();
    return {
      month: $fromDtStartOfDay.format("MMMM YYYY"),
      fromDt: $fromDtStartOfDay.format("DD-MMM-YYYY"),
      toDt: $fromDtStartOfDay
        .add(daysInMonth, "days")
        .subtract(1, "day")
        .format("DD-MMM-YYYY"),
    };
  }, times(numberOfMonths));
  return results;
};
