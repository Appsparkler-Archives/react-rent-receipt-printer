import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IInputGroupProps, InputGroup } from "./index";

const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args} />
);

export const TextType = Template.bind({});
TextType.args = {
  label: "Tenants Name",
  type: "text",
} as IInputGroupProps;

export const DateType = Template.bind({});
DateType.args = {
  label: "From",
  type: "date",
} as IInputGroupProps;

export const TimeType = Template.bind({});
TimeType.args = {
  label: "From",
  type: "time",
} as IInputGroupProps;

export default {
  title: "Elements/Input Group",
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>;
