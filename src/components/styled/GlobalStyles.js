import React from "react";
import { Global, css } from "@emotion/core";
import { setColor, setFont } from "./utils";

const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :root {
            --1h: 1.4rem;
          }
          body {
            font-size: 100%;
            color: ${setColor.mainBlack};
            background: ${setColor.mainWhite};
            ${setFont.main};
          }
          html {
            line-height: var(--1h);
          }
          h1 {
            font-size: 3em;
            line-height: 1.2;
            margin-bottom: 0.5em;
          }
          h2 {
            font-size: 2em;
            margin-bottom: 0.75em;
          }
          h3 {
            font-size: 1.5em;
            line-height: 1;
            margin-bottom: 1m;
          }
          h4 {
            font-size: 1.2em;
            line-height: 1.2;
            margin-bottom: 1.25em;
            font-weight: bold;
          }
          h5 {
            font-size: 1em;
            margin-bottom: 1.5em;
            font-weight: bold;
          }
          h6 {
            font-size: 1em;
            font-weight: bold;
          }
          p {
            line-height: 1.5;
            margin: 0 0 1.5rem 0;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
