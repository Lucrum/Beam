import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

document.addEventListener("turbo:load", () => {
  console.log("hello!");
  if (document.getElementById("react-root")) {
    ReactDOM.createRoot(document.getElementById("react-root")).render(
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    );
  }
});
