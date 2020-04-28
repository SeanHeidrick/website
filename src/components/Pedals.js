import React from "react";
import { Link } from "react-router-dom";
export function Pedals(props) {
  return (
    <section className="pedal-elements">
      {props.info.map((item) => (
        <div key={item.button}>
          <img src={item.img} alt={`${item.p} pedal`} />
          <p>{item.p}</p>
          <Link to={`/${item.button}`}>
            <button>{item.button}</button>
          </Link>
        </div>
      ))}
    </section>
  );
}
