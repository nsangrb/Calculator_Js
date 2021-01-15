import { LoadNewWindowInCurrent } from "./default.js";

const electron = require("electron");

document.getElementById("menu_btn").addEventListener("click", () => {
  if (document.getElementById("menu_section").style.visibility == "hidden")
    document.getElementById("menu_section").style.visibility = "visible";
  else {
    document.getElementById("menu_section").style.visibility = "hidden";
  }
});

document.getElementById("scientific").addEventListener("click", () => {
  LoadNewWindowInCurrent("src/scientific.html");
});
