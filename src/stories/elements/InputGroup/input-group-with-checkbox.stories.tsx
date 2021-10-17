import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IInputGroupWithCheckbox, InputGroupWithCheckbox } from "./index";

const Template: ComponentStory<typeof InputGroupWithCheckbox> = (args) => (
  <InputGroupWithCheckbox {...args} />
);

export const Example = Template.bind({});
Example.args = {
  inputLabel: "Amount",
  checkboxLabel: "Includes Maintenance",
} as IInputGroupWithCheckbox;

export default {
  title: "Elements/Input Group With Checkbox",
  component: InputGroupWithCheckbox,
} as ComponentMeta<typeof InputGroupWithCheckbox>;
