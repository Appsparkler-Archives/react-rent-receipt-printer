import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RentReceiptPrinterApp } from "./index";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RentReceiptPrinterApp> = () => (
  <RentReceiptPrinterApp />
);

export const App = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
App.args = {};

export default {
  title: "Compounds/Rent Receipt Printer App",
  component: RentReceiptPrinterApp,
} as ComponentMeta<typeof RentReceiptPrinterApp>;
