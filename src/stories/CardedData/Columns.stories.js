import React from "react";
import CardedData from "../../components/CardedData";

const { comics } = require("../../api/comics.json").data;

const {
  starWarsCharacters,
} = require("../../api/starWarsCharacters.json").data;

const {
  getComicBookColumns,
} = require("../../mockColumnDefinitions/comicBookColumns");

export default {
  title: "Carded Data/Columns",
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

export const DifferentDataWithFilter = Template.bind({});
DifferentDataWithFilter.args = {
  data: starWarsCharacters,
  layout: {
    displayFilterDropdown: true,
  },
};
