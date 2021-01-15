import { LoadNewWindowInCurrent } from "./default.js";

const electron = require("electron");

document.getElementById("menu_btn").addEventListener("click", () => {
  if (document.getElementById("menu_section").style.visibility == "hidden")
    document.getElementById("menu_section").style.visibility = "visible";
  else {
    document.getElementById("menu_section").style.visibility = "hidden";
  }
});

document.getElementById("standard").addEventListener("click", () => {
  LoadNewWindowInCurrent("src/standard.html");
});
