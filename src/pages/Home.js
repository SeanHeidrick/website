import React from "react";
import { PedalsHome } from "../components/PedalsHome";
import { welcomeText } from "../elementInfo/welcome";

import { Welcome } from "../components/Welcome";

export const Home = () => {
  let pedalJSON = require("../elementInfo/pedalElement.json");

  return (
    <>
      <Welcome title={welcomeText.Home.title} text={welcomeText.Home.text} />
      <PedalsHome info={pedalJSON} />
    </>
  );
};
