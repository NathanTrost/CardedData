import React from "react";
import CardedData from "../../components/CardedData";

const { comics } = require("../../api/staticMockApi.json").data;
const {
  getComicBookColumns,
} = require("../../mockColumnDefinitions/comicBookColumns");

export default {
  title: "Carded Data/Layout",
  component: CardedData,
  args: {
    columnOverwrite: true,
    customColumns: getComicBookColumns,
    data: comics,
    layout: {
      displayColumnLabels: true,
      displayFilterDropdown: false,
      gridType: "columnsAsGrid",
      useGrid: true,
    },
  },
};

const Template = (args) => <CardedData {...args} />;

export const ColumnsAsGridLayout = Template.bind({});

export const ItemsAsGridLayout = Template.bind({});

ItemsAsGridLayout.args = {
  layout: {
    gridType: "itemsAsGrid",
    gridLength: 3,
  },
};
