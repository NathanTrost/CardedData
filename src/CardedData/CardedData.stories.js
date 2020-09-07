import React from "react";
import CardedData from "./CardedData";

const { comics } = require("../api/staticMockApi.json").data;
const {
  getComicBookColumns,
} = require("../mockColumnDefinitions/comicBookColumns");

export default {
  title: "Example/CardedData",
  component: CardedData,
  args: {
    columns: () => {},
    data: [],
  },
};

const Template = (args) => <CardedData {...args} />;

export const Primary = Template.bind({});
Primary.args = { data: comics };

export const Secondary = Template.bind({});
Secondary.args = { customColumns: getComicBookColumns(), data: comics };
