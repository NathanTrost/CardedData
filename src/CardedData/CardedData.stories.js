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

export const ColumnsFromData = Template.bind({});
ColumnsFromData.args = { data: comics };

export const ColumnsFromCustomConfig = Template.bind({});
ColumnsFromCustomConfig.args = {
  customColumns: getComicBookColumns,
  data: comics,
};

export const ColumnsWithMergedCustomConfig = Template.bind({});
ColumnsWithMergedCustomConfig.args = {
  customColumns: getComicBookColumns,
  data: comics,
  columnOverwrite: true,
};
