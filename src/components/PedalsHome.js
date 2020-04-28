import React from "react";
import { Link } from "react-router-dom";
export function PedalsHome(props) {
  return (
    <section className="pedal-elements">
      {props.info.map((item) => (
        <div key={item.button}>
          <img src={item.img} alt={`${item.p} pedal`} />
          <p>{item.p}</p>
          <Link to={`/${item.button}`}>
            <button>
              <a href={item.link}>{item.button}</a>
            </button>
          </Link>
        </div>
      ))}
    </section>
  );
}
