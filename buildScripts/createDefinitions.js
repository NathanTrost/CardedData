const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { generateFromFile } = require("react-to-typescript-definitions");

const rootDir = path.join(__dirname, "../src", "components");

function buildComponentDefinitions(componentDirPath, componentName) {
  const componentPath = path.join(componentDirPath, `${componentName}.js`);

  if (fs.existsSync(componentPath)) {
    // The first parameter for generateFromFile's is moduleName,
    // setting it to null generates type definitions without the module.
    const componentTS = generateFromFile(null, componentPath);

    console.log("ts?", componentTS);
    const tsFilePath = path.join(componentDirPath, "index.d.ts");

    fs.writeFile(tsFilePath, componentTS, (err) => {
      if (err) console.log(chalk.red(err));
    });
  }
}

fs.readdirSync(rootDir).forEach((directoryName) => {
  const componentDirPath = path.join(rootDir, directoryName);
  const isDirectory = fs.lstatSync(componentDirPath).isDirectory();

  if (isDirectory) {
    if (directoryName === "styled") return;
    buildComponentDefinitions(componentDirPath, directoryName);
  }
});
