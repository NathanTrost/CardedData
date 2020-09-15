import React from "react";
import CardedData from "../../components/CardedData";

const { comics } = require("../../api/staticMockApi.json").data;
const {
  getComicBookColumns,
} = require("../../mockColumnDefinitions/comicBookColumns");

export default {
  title: "Carded Data/Colums",
  component: CardedData,
  args: {
    columns: () => {},
    data: [],
  },
};

const Template = (args) => <CardedData {...args} />;

export const WithDefaultData = Template.bind({});
WithDefaultData.args = { data: comics };

export const WithCustomConfig = Template.bind({});
WithCustomConfig.args = {
  customColumns: getComicBookColumns,
  data: comics,
};

export const WithMergedCustomConfig = Template.bind({});
WithMergedCustomConfig.args = {
  customColumns: getComicBookColumns,
  data: comics,
  columnOverwrite: true,
};
