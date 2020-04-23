import React from "react";
import { Pedals } from "./Pedals";
import { NavBar } from "./NavBar";
import { Welcome } from "./Welcome";

export const Home = () => {
  let pedalJSON = require("./pedalElement.json");
  let navBarJSON = require("./navBar.json");

  return (
    <>
      <NavBar navJSON={navBarJSON} />
      <Welcome />
      <Pedals info={pedalJSON} />
    </>
  );
};
