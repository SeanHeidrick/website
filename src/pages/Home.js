import React from "react";
import { Pedals } from "../Pedals";

import { Welcome } from "../Welcome";

export const Home = () => {
  let pedalJSON = require("../pedalElement.json");

  return (
    <>
      <Welcome />
      <Pedals info={pedalJSON} />
    </>
  );
};
