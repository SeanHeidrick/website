import React from "react";

import "./App.scss";
import { Pedals } from "./Pedals";
import { NavBar } from "./NavBar";
import { Welcome } from "./Welcome";

function App() {
  let pedalJSON = require("./pedalElement.json");
  let navBarJSON = require("./navBar.json");

  return (
    <>
      <NavBar navJSON={navBarJSON} />
      <Welcome />
      <Pedals pedalJ={pedalJSON} />
    </>
  );
}
export default App;
