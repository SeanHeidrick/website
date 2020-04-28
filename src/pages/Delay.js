import React from "react";
import { Pedals } from "../components/Pedals";
import { pedals } from "../elementInfo/DistortionElements";
import { Welcome } from "../components/Welcome";

import { welcomeText } from "../elementInfo/welcome";

export const Delay = () => {
  return (
    <>
      <Welcome title={welcomeText.Delay.title} text={welcomeText.Delay.text} />
      <Pedals info={pedals.delay} />
    </>
  );
};
