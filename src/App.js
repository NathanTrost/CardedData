import React from "react";
import CardedData from "./CardedData";
const { comics } = require("./api/staticMockApi.json").data;

function App() {
  return (
    <div className="app-wrapper">
      <CardedData data={comics} />
    </div>
  );
}

export default App;
