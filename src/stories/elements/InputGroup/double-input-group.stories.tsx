import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IDoubleInputGroupProps, DoubleInputGroup } from "./index";

const Template: ComponentStory<typeof DoubleInputGroup> = (args) => (
  <DoubleInputGroup {...args} />
);

export const TextType = Template.bind({});
TextType.args = {
  label1: "First Name",
  type1: "text",
  label2: "Last Name",
} as IDoubleInputGroupProps;

// export const DateType = Template.bind({});
// DateType.args = {
//   label: "From",
//   type: "date",
// } as IDoubleInputGroupProps;

// export const TimeType = Template.bind({});
// TimeType.args = {
//   label: "Arrival Time",
//   type: "time",
// } as IDoubleInputGroupProps;

// export const EmailType = Template.bind({});
// EmailType.args = {
//   label: "Email Address",
//   type: "email",
// } as IDoubleInputGroupProps;

// export const DateTimeType = Template.bind({});
// DateTimeType.args = {
//   label: "Pick Color",
//   type: "datetime-local",
// } as IDoubleInputGroupProps;

// export const NumberType = Template.bind({});
// NumberType.args = {
//   label: "Age",
//   type: "number",
//   value: "10",
// } as IDoubleInputGroupProps;

// export const PasswordType = Template.bind({});
// PasswordType.args = {
//   label: "Password",
//   type: "password",
// } as IDoubleInputGroupProps;

// export const WeekType = Template.bind({});
// WeekType.args = {
//   label: "Week",
//   type: "week",
// } as IDoubleInputGroupProps;

// export const MonthType = Template.bind({});
// MonthType.args = {
//   label: "Month",
//   type: "month",
// } as IDoubleInputGroupProps;

// export const TelType = Template.bind({});
// TelType.args = {
//   label: "Tel #",
//   type: "tel",
// } as IDoubleInputGroupProps;

// export const SearchType = Template.bind({});
// SearchType.args = {
//   label: "Search",
//   type: "search",
// } as IDoubleInputGroupProps;

// export const UrlType = Template.bind({});
// UrlType.args = {
//   label: "URL",
//   type: "url",
// } as IDoubleInputGroupProps;

export default {
  title: "Elements/Double Input Group",
  component: DoubleInputGroup,
} as ComponentMeta<typeof DoubleInputGroup>;
