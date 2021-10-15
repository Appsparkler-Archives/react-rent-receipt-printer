import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IInputGroupProps, InputGroup } from "./index";

const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args} />
);

export const TextType = Template.bind({});
TextType.args = {
  label: "Name",
  type: "text",
} as IInputGroupProps;

export const DateType = Template.bind({});
DateType.args = {
  label: "From",
  type: "date",
} as IInputGroupProps;

export const TimeType = Template.bind({});
TimeType.args = {
  label: "Arrival Time",
  type: "time",
} as IInputGroupProps;

export const EmailType = Template.bind({});
EmailType.args = {
  label: "Email Address",
  type: "email",
} as IInputGroupProps;

export const DateTimeType = Template.bind({});
DateTimeType.args = {
  label: "Pick Color",
  type: "datetime-local",
} as IInputGroupProps;

export const NumberType = Template.bind({});
NumberType.args = {
  label: "Age",
  type: "number",
  value: "10",
} as IInputGroupProps;

export default {
  title: "Elements/Input Group",
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>;
