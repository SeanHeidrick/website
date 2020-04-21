import React from "react";
export function NavBar(props) {
  return (
    <div className="nav-bar">
      {props.navJSON.map((item) => (
        <a href="./">{item.name}</a>
      ))}
    </div>
  );
}
