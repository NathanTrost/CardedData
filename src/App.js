import React from "react";
import CardedData from "./components/CardedData";
import GlobalStyles from "./components/styled/GlobalStyles";
const { comics } = require("./api/comics.json").data;

function App() {
  return (
    <>
      <GlobalStyles />
      <CardedData data={comics} />
    </>
  );
}

export default App;
