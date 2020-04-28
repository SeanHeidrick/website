import React from "react";
import { Pedals } from "../components/Pedals";
import { pedals } from "../elementInfo/DistortionElements";
import { Welcome } from "../components/Welcome";

import { welcomeText } from "../elementInfo/welcome";

export const Distortion = () => {
  return (
    <>
      <Welcome
        title={welcomeText.Distortion.title}
        text={welcomeText.Distortion.text}
      />
      <Pedals info={pedals.distortion} />
    </>
  );
};
