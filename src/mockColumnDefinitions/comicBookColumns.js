import React from "react";
import filterLastNameFirst from "./filterLastNameFirst";

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
      filterRule: (dataArray, direction) =>
        filterLastNameFirst(dataArray, direction),
      render: (text, record) => <div>{text}</div>,
    },
    // {
    //   position: 220,
    //   id: "cover_artist",
    //   title: "Cover",
    //   className: "col-cover_artist",
    //   dataKey: "cover_artist",
    //   render: (text, record) => <div>{text}</div>,
    // },
    {
      position: 300,
      id: "release_date",
      title: "Release Date",
      className: "col-release_date",
      dataKey: "release_date",
      render: (text, record) => <div>{text}</div>,
    },
    // {
    //   position: 400,
    //   id: "creators",
    //   title: "Creators",
    //   className: "col-creators",
    //   dataKey: "creators",
    //   render: (text, record) => <div>{text}</div>,
    // },
  ];
}
/* eslint-enable react/no-multi-comp */
/* eslint-enable react/display-name */
