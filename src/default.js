export { LoadNewWindowInCurrent };
//Here's the ready function for you to use
function LoadNewWindowInCurrent(PathToHtml) {
  const electron = require("electron");
  let localWindow = electron.remote.getCurrentWindow();
  localWindow.loadFile(PathToHtml);
}
