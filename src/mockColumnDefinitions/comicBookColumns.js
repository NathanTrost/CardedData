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
    {
      position: 400,
      id: "creators",
      title: "Creators",
      className: "col-creators",
      dataKey: "creators",
      filterRule: (text, record) => {
        const acceptedRoles = [
          { type: "artist", code: "A" },
          { type: "cover_artist", code: "CA" },
          { type: "writer", code: "W" },
        ];

        const splitRegEx = new RegExp(/(?=[\(])/g);
        const rolesWithNames = text.split(splitRegEx);

        const roles = rolesWithNames.filter((str, index) => {
          const roleIdentifierRegEx = new RegExp(
            /(?![\(])\w{1,2}(?=[*^\/\)])/g
          );
          const roleCodes = str.trim().match(roleIdentifierRegEx) || null;
          const removeRoleRegex = new RegExp(/^[\(\w\)\/]*/s);
          const name = str.replace(removeRoleRegex, "").trim();

          console.log("roleCodes", roleCodes, name);
          return roleCodes;

          // return roleCodes.map((role) => {
          //   return {
          //     role: acceptedRoles.find((role) => role.code === role),
          //     name,
          //   };
          // });
        });

        console.log("roles", roles);

        // const createRoleObject = (role, str) => {
        //   const { code, type } = role;
        //   const codeWithParams = `(${code})`;
        //   const startPos = str.indexOf(codeWithParams) + codeWithParams.length;
        //   const roleString = str.substring(startPos).split("(")[0].trim();

        //   const namesArray = roleString.split(",");

        //   const names = namesArray.map((fullName) => {
        //     const firstName = fullName
        //       .substring(0, fullName.lastIndexOf(" "))
        //       .trim();
        //     const lastName = fullName.substring(firstName.length).trim();
        //     return { firstName, lastName, fullName };
        //   });

        //   return {
        //     role: type,
        //     names,
        //   };
        // };

        // const mappedRoles = acceptedRoles.map((role) => {
        //   const hasMatch = text.match(role.code);
        //   if (hasMatch) {
        //     const creator = createRoleObject(role, text);
        //     console.log("creator", creator);
        //     return creator;
        //   }
        // });

        return;
      },
      render: (text, record) => <div>{text}</div>,
    },
  ];
}
/* eslint-enable react/no-multi-comp */
/* eslint-enable react/display-name */
