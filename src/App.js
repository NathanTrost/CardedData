import React from "react";
import CardedData from "./components/CardedData";
import GlobalStyles from "./components/globals/GlobalStyles";
const { comics } = require("./api/staticMockApi.json").data;

function App() {
  return (
    <>
      <GlobalStyles />
      <CardedData data={comics} />
    </>
  );
}

export default App;
