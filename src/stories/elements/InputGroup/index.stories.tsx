import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IInputGroupProps, InputGroup } from "./index";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args} />
);

export const WithAllProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAllProps.args = {
  label: "Tenants Name",
} as IInputGroupProps;

export default {
  title: "Elements/Input Group",
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>;
