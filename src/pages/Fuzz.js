import React from "react";
import { Pedals } from "../components/Pedals";
import { pedals } from "../elementInfo/DistortionElements";
import { Welcome } from "../components/Welcome";

import { welcomeText } from "../elementInfo/welcome";

export const Fuzz = () => {
  return (
    <>
      <Welcome title={welcomeText.Fuzz.title} text={welcomeText.Fuzz.text} />
      <Pedals info={pedals.fuzz} />
    </>
  );
};
