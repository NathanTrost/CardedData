import React from "react";
import CardedData from "./CardedData";

const { comics } = require("../api/staticMockApi.json").data;
const {
  getComicBookColumns,
} = require("../columnDefinitions/comicBookColumns");

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
Primary.args = { columns: getComicBookColumns(), data: comics };

export const Secondary = Template.bind({});
Secondary.args = { columns: getComicBookColumns(), data: comics };
