import React from "react";
import { slide as Menu } from "react-burger-menu";

export function NavBar(props) {
  return (
    <section>
      <Menu right className="sidebar">
        {props.navJSON.map((item) => (
          <a href="./">{item.name}</a>
        ))}
      </Menu>
      <div className="nav-bar">
        {props.navJSON.map((item) => (
          <a href="./">{item.name}</a>
        ))}
      </div>
    </section>
  );
}
