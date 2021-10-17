import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IDoubleInputGroupProps, DoubleInputGroup } from "./index";

const Template: ComponentStory<typeof DoubleInputGroup> = (args) => (
  <DoubleInputGroup {...args} />
);

export const Example = Template.bind({});
Example.args = {
  label1: "First Name",
  type1: "text",
  label2: "Last Name",
} as IDoubleInputGroupProps;

export default {
  title: "Elements/Double Input Group",
  component: DoubleInputGroup,
} as ComponentMeta<typeof DoubleInputGroup>;
