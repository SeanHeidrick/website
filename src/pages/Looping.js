import React from "react";
import { Pedals } from "../components/Pedals";
import { pedals } from "../elementInfo/DistortionElements";
import { Welcome } from "../components/Welcome";

import { welcomeText } from "../elementInfo/welcome";

export const Looping = () => {
  return (
    <>
      <Welcome
        title={welcomeText.Looping.title}
        text={welcomeText.Looping.text}
      />
      <Pedals info={pedals.looping} />
    </>
  );
};
