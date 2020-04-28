import React from "react";
import { Pedals } from "../components/Pedals";
import { pedals } from "../elementInfo/DistortionElements";
import { Welcome } from "../components/Welcome";

import { welcomeText } from "../elementInfo/welcome";

export const Overdrive = () => {
  return (
    <>
      <Welcome
        title={welcomeText.Overdrive.title}
        text={welcomeText.Overdrive.text}
      />
      <Pedals info={pedals.overdrive} />
    </>
  );
};
