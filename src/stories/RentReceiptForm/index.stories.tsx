import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IRentReceiptForm, RentReceiptForm } from "./index";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RentReceiptForm> = (args) => (
  <RentReceiptForm {...args} />
);

export const WithAllProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAllProps.args = {} as IRentReceiptForm;

export default {
  title: "Compounds/Rent Receipt Form",
  component: RentReceiptForm,
} as ComponentMeta<typeof RentReceiptForm>;
