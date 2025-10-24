import { registerIconLibrary } from "https://early.webawesome.com/webawesome@3.0.0-beta.6/dist/webawesome.js";

// Determine the correct path based on the current location
const getIconPath = (name) => {
  const currentPath = window.location.pathname;
  const isInPatterns = currentPath.includes("/patterns/");
  const basePath = isInPatterns ? "../assets/icons/" : "./assets/icons/";
  return `${basePath}${name}.svg`;
};

registerIconLibrary("Anduin", {
  resolver: (name) => getIconPath(name),
  mutator: (svg) => svg.setAttribute("fill", "currentColor"),
});
