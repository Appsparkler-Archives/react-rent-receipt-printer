import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ITextareaGroupProps, TextAreaGroup } from "./index";

const Template: ComponentStory<typeof TextAreaGroup> = (args) => (
  <TextAreaGroup {...args} />
);

export const Example = Template.bind({});
Example.args = {
  label: "Address",
  name: "address",
  rows: 5,
} as ITextareaGroupProps;

export default {
  title: "Elements/Textarea Group",
  component: TextAreaGroup,
} as ComponentMeta<typeof TextAreaGroup>;
