import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IRentReceiptForm, RentReceiptFormWithValidation } from "./index";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RentReceiptFormWithValidation> = (
  args
) => <RentReceiptFormWithValidation {...args} />;

export const WithValidation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithValidation.args = {} as IRentReceiptForm;

export default {
  title: "Compounds/Rent Receipt Form",
  component: RentReceiptFormWithValidation,
} as ComponentMeta<typeof RentReceiptFormWithValidation>;
