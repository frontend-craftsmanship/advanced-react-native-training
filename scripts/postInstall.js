let execSync = require("child_process").execSync;
let fs = require("fs");
let path = require("path");

function replaceAppKey() {
  execSync(`yarn add replace-in-file -D`, { stdio: "inherit" });

  let appJsonPath = path.resolve("app.json");
  let appName = JSON.parse(fs.readFileSync(appJsonPath)).name;

  let replace = require("replace-in-file");

  replace.sync({
    files: [path.resolve("index.android.js"), path.resolve("index.ios.js")],
    from: "react-native-template-juang",
    to: appName
  });
}

function addScripts() {
  console.log("Adding scripts for the project...");

  let packageJsonPath = path.resolve("package.json");
  let packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
  let scriptsPath = path.resolve("scripts.json");
  let scriptJson = JSON.parse(fs.readFileSync(scriptsPath));
  let result = { scripts: { ...scriptJson }, ...packageJson };

  fs.writeFile("package.json", JSON.stringify(result), (err, data) => {
    if (err) {
      console.log("error", err);
    }
    console.log("scripts have been added to package.json");
  });
}

function cleanup() {
  let devDependenciesJsonPath = path.resolve("devDependencies.json");
  let scriptsPath = path.resolve("devDependencies.json");
  fs.unlink(devDependenciesJsonPath);
  execSync(`rm -rf ${devDependenciesJsonPath} ${scriptsPath}`);
}

function postTemplateInit() {
  replaceAppKey();
  addScripts();
  cleanup();
}

postTemplateInit();
