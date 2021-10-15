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

export const PasswordType = Template.bind({});
PasswordType.args = {
  label: "Password",
  type: "password",
} as IInputGroupProps;

export const WeekType = Template.bind({});
WeekType.args = {
  label: "Week",
  type: "week",
} as IInputGroupProps;

export const MonthType = Template.bind({});
MonthType.args = {
  label: "Month",
  type: "month",
} as IInputGroupProps;

export const TelType = Template.bind({});
TelType.args = {
  label: "Tel #",
  type: "tel",
} as IInputGroupProps;

export const SearchType = Template.bind({});
SearchType.args = {
  label: "Search",
  type: "search",
} as IInputGroupProps;

export const UrlType = Template.bind({});
UrlType.args = {
  label: "URL",
  type: "url",
} as IInputGroupProps;

export default {
  title: "Elements/Input Group",
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>;
