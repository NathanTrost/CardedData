import React from "react";

/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
export function getComicBookColumns(commonFunctions) {
  return [
    {
      position: 0,
      id: "title",
      title: "Title",
      className: "col-title",
      dataIndex: "title",
      render: (text, record) => <div>{text}</div>,
    },
    {
      position: 100,
      id: "publisher",
      title: "Publisher",
      className: "col-publisher",
      dataIndex: "publisher",
      render: (text, record) => <div>{text}</div>,
    },
    {
      position: 200,
      id: "description",
      title: "Description",
      className: "col-description",
      dataIndex: "description",
      render: (text, record) => <div>{text}</div>,
    },
    {
      position: 300,
      id: "release_date",
      title: "Release Date",
      className: "col-release_date",
      dataIndex: "release_date",
      render: (text, record) => <div>{text}</div>,
    },
    {
      position: 400,
      id: "creators",
      title: "Creators",
      className: "col-creators",
      dataIndex: "creators",
      render: (text, record) => <div>{text}</div>,
    },
  ];
}
/* eslint-enable react/no-multi-comp */
/* eslint-enable react/display-name */
