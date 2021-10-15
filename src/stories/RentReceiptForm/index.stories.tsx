import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IRentReceiptProps, RentReceipt } from "./index";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RentReceipt> = (args) => (
  <RentReceipt {...args} />
);

export const WithAllProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAllProps.args = {
  amount: "16,000",
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

export default {
  title: "Compounds/Rent Receipt",
  component: RentReceipt,
} as ComponentMeta<typeof RentReceipt>;
