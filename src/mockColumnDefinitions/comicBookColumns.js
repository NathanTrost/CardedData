import React from "react";
import sortLastNameFirst from "./sortLastNameFirst";

/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
export function getComicBookColumns(commonFunctions) {
  return [
    {
      position: 0,
      id: "title",
      title: "Title",
      className: "col-title",
      dataKey: "title",
      render: (text, record) => <div>{text}</div>,
    },
    {
      position: 100,
      id: "publisher",
      title: "Publisher",
      className: "col-publisher",
      dataKey: "publisher",
      sortArrows: true,
      render: (text, record) => <div>{text}</div>,
    },
    {
      position: 200,
      id: "writer",
      title: "Writer",
      className: "col-writer",
      dataKey: "writer",
      render: (text, record) => <div>{text}</div>,
    },
    {
      position: 210,
      id: "artist",
      title: "Artist",
      className: "col-artist",
      dataKey: "artist",
      sortRule: (dataArray, direction) =>
        sortLastNameFirst(dataArray, direction),
      render: (text, record) => <div>{text}</div>,
    },
    {
      position: 300,
      id: "release_date",
      title: "Release Date",
      className: "col-release_date",
      dataKey: "release_date",
      render: (text, record) => <div>{text}</div>,
    },
  ];
}
/* eslint-enable react/no-multi-comp */
/* eslint-enable react/display-name */
