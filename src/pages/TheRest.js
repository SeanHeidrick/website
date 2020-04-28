import React from "react";
import { Pedals } from "../components/Pedals";
import { pedals } from "../elementInfo/DistortionElements";
import { Welcome } from "../components/Welcome";

import { welcomeText } from "../elementInfo/welcome";

export const TheRest = () => {
  return (
    <>
      <Welcome
        title={welcomeText.TheRest.title}
        text={welcomeText.TheRest.text}
      />
      <Pedals info={pedals.theRest} />
    </>
  );
};
