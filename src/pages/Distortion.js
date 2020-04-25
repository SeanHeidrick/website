import React from "react";
import { Pedals } from "../Pedals";

export const Distortion = () => {
  let pedalJSON = require("../pedalElement.json");

  return <Pedals info={pedalJSON} />;
};
