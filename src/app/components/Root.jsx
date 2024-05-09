"use client";
import React from "react";

import { ReactDOM } from "react-dom";

export default function App() {
  //const appDomElement = document.getElementById("app");

  //const root = ReactDOM.createRoot(appDomElement);

  const button = React.createElement("button", null, "Me gusta");
  const button2 = React.createElement("button", { "data-id": 123 }, "hola");
  const button3 = React.createElement("button", { "data-id": 234 }, "holiis");
  const div = React.createElement("div", null, [button, button2, button3]);
  const fragment = React.createElement(React.Fragment, null, [
    button,
    button2,
    button3,
  ]);
  const h = React.createElement;
  const fragment2 = h(React.Fragment, null, [button, button2, button3]);
  const response = '<script>Hola</script>';
  const elemResponse=h("h1",{ "data-id": 255 },response)
  const button4 = React.createElement("button", { "data-id": 234 }, "holiis");
  return (
  elemResponse
  );
}
