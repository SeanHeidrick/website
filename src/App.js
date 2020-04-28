import React from "react";
import "./App.scss";
import { Home } from "./pages/Home";
import { Distortion } from "./pages/Distortion";
import { NavBar } from "./components/NavBar";
import { Fuzz } from "./pages/Fuzz";
import { Overdrive } from "./pages/Overdrive";
import { Reverb } from "./pages/Reverb";
import { Wah } from "./pages/Wah";
import { Delay } from "./pages/Delay";
import { Looping } from "./pages/Looping";
import { TheRest } from "./pages/TheRest";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  let navBarJSON = require("./elementInfo/navBar.json");
  return (
    <>
      <Router>
        <NavBar navJSON={navBarJSON} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Distortion" component={Distortion} />
          <Route path="/Fuzz" component={Fuzz} />
          <Route path="/Overdrive" component={Overdrive} />
          <Route path="/Reverb" component={Reverb} />
          <Route path="/Wah" component={Wah} />
          <Route path="/Delay" component={Delay} />
          <Route path="/Looping" component={Looping} />
          <Route path="/TheRest" component={TheRest} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
