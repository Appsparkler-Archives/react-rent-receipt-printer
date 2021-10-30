import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IDayPickerInputProps, DayPickerInput } from "./index";

const Template: ComponentStory<typeof DayPickerInput> = (args) => (
  <DayPickerInput {...args} />
);

export const Example = Template.bind({});
Example.args = {} as IDayPickerInputProps;

export default {
  title: "Elements/DayPickerInput Group",
  component: DayPickerInput,
} as ComponentMeta<typeof DayPickerInput>;
