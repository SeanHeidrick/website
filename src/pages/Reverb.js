import React from "react";
import { Pedals } from "../components/Pedals";
import { pedals } from "../elementInfo/DistortionElements";
import { Welcome } from "../components/Welcome";

import { welcomeText } from "../elementInfo/welcome";

export const Reverb = () => {
  return (
    <>
      <Welcome
        title={welcomeText.Reverb.title}
        text={welcomeText.Reverb.text}
      />
      <Pedals info={pedals.reverb} />
    </>
  );
};
