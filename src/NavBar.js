import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export function NavBar(props) {
  return (
    <nav>
      <Menu right className="sidebar">
        {props.navJSON.map((item) => (
          <Link to={item.link}>
            <p>{item.name}</p>
          </Link>
        ))}
      </Menu>
      <div className="nav-bar">
        {props.navJSON.map((item) => (
          <Link to={item.link}>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
