import { ComponentStory, ComponentMeta } from "@storybook/react";
import { times, map } from "../../logic/lodash";

import {
  IInputGroupWithSelect,
  InputGroupWithSelect,
  OptionType,
} from "./index";

const Template: ComponentStory<typeof InputGroupWithSelect> = (args) => (
  <InputGroupWithSelect {...args} />
);

export const Example = Template.bind({});
Example.args = {
  inputLabel: "From Date",
  inputName: "fromDate",
  selectName: "noOfMonths",
  inputType: "date",
  selectLabel: "No. of months",
  selectValue: "12",
  options: map<any, OptionType>(
    (idx) => ({
      label: idx + 1,
      value: idx + 1,
    }),
    times((n) => n, 12)
  ),
} as IInputGroupWithSelect;

export default {
  title: "Elements/Input Group With Select",
  component: InputGroupWithSelect,
} as ComponentMeta<typeof InputGroupWithSelect>;
