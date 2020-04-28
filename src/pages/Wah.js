import React from "react";
import { Pedals } from "../components/Pedals";
import { pedals } from "../elementInfo/DistortionElements";
import { Welcome } from "../components/Welcome";

import { welcomeText } from "../elementInfo/welcome";

export const Wah = (props) => {
  return (
    <>
      <Welcome title={welcomeText.Wah.title} text={welcomeText.Wah.text} />
      <Pedals info={pedals.wah} />
    </>
  );
};
