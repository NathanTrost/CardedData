import React from "react";
import CardedData from "../../components/CardedData";

const { comics } = require("../../api/staticMockApi.json").data;
const {
  getComicBookColumns,
} = require("../../mockColumnDefinitions/comicBookColumns");

export default {
  title: "Carded Data/Header Display",
  component: CardedData,
  args: {
    columns: () => {},
    data: [],
  },
};

const Template = (args) => <CardedData {...args} />;

export const WithColumnTitles = Template.bind({});
WithColumnTitles.args = {
  columnOverwrite: true,
  customColumns: getComicBookColumns,
  data: comics,
  layout: {
    displayColumnLabels: true,
    gridType: "columnsAsGrid",
    useGrid: true,
  },
};

export const WithFilterDropdown = Template.bind({});
WithFilterDropdown.args = {
  columnOverwrite: true,
  customColumns: getComicBookColumns,
  data: comics,
  layout: {
    displayColumnLabels: true,
    displayFilterDropdown: true,
    gridType: "columnsAsGrid",
    useGrid: true,
  },
};

export const WithNoHeader = Template.bind({});
WithNoHeader.args = {
  columnOverwrite: true,
  customColumns: getComicBookColumns,
  data: comics,
  layout: {
    displayColumnLabels: false,
    displayFilterDropdown: false,
    gridType: "columnsAsGrid",
    useGrid: true,
  },
};
