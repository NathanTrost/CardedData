import React from "react";
import CardedData from "./CardedData";
const { comics } = require("./api/staticMockApi.json").data;

function App() {
  return <CardedData data={comics} />;
}

export default App;
