import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IRentReceiptProps, RentReceipt } from "./index";
import { map } from "../logic/lodash";
import { ReceiptFormData } from "../RentReceiptForm";
import {
  getRentReceiptInfo,
  IGetRentReciptInfo,
} from "../logic/getRentReceiptInfo";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RentReceipt> = (args) => (
  <RentReceipt {...args} />
);

export const WithAllProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAllProps.args = {
  amount: "16,000",
  month: "October 2021",
  fromDt: "01-Oct-2021",
  toDt: "31-Oct-2021",
  landlordName: "Prakash Mishra",
  panNo: "IEOSQ4383U",
  tenantName: "Raman Agnihotri",
  address: `
    202 Paradise Enclave,
    Beach Road,
    Princeton
    California, America - 20039
   `,
  printOnly: false,
} as IRentReceiptProps;

export const multipleReceipts = () => {
  const formData: ReceiptFormData = {
    landlordName: "Prakash Mishra",
    fromDate: "2021-10-01",
    includesMaintenance: false,
    noOfMonths: "12",
    rentAmount: "16,000",
    tenantName: "",
    landlordPan: "IEOSQ4383U",
    address: `
    202 Paradise Enclave,
    Beach Road,
    Princeton
    California, America - 20039
   `,
  };
  const rentReceiptsInfo = getRentReceiptInfo(
    formData.fromDate,
    formData.noOfMonths
  );
  const receiptsData: IRentReceiptProps[] = map<
    IGetRentReciptInfo,
    IRentReceiptProps
  >(({ month, fromDt, toDt }) => {
    return {
      month,
      fromDt,
      toDt,
      address: formData.address,
      amount: formData.rentAmount,
      landlordName: formData.landlordName,
      panNo: formData.landlordPan,
      tenantName: formData.tenantName,
    } as IRentReceiptProps;
  }, rentReceiptsInfo);

  return map<IRentReceiptProps, JSX.Element>(
    (props) => <RentReceipt {...props} />,
    receiptsData
  );
};

export default {
  title: "Compounds/Rent Receipt",
  component: RentReceipt,
} as ComponentMeta<typeof RentReceipt>;
