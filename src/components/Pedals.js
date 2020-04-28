import React from "react";

export function Pedals(props) {
  return (
    <section className="pedal-elements">
      {props.info.map((item) => (
        <div key={item.p}>
          <img src={item.img} alt={`${item.p} pedal`} />
          <p>{item.p}</p>

          <a href={item.link}>
            <button>See Pedal</button>
          </a>
        </div>
      ))}
    </section>
  );
}
