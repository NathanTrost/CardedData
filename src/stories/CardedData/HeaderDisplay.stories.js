import React from "react";
import CardedData from "../../components/CardedData";

const { comics } = require("../../api/comics.json").data;
const {
  getComicBookColumns,
} = require("../../mockColumnDefinitions/comicBookColumns");

export default {
  title: "Carded Data/Header Display",
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

export const WithColumnTitles = Template.bind({});

export const WithFilterDropdown = Template.bind({});
WithFilterDropdown.args = {
  layout: {
    displayFilterDropdown: true,
  },
};

export const WithNoHeader = Template.bind({});
WithNoHeader.args = {
  layout: {
    displayColumnLabels: false,
  },
};

const HeaderComponent = () => {
  return <h1>Hi there!!!</h1>;
};

export const WithCustomHeader = Template.bind({});
WithCustomHeader.args = {
  customHeader: <HeaderComponent />,
  layout: {
    displayFilterDropdown: true,
  },
};
