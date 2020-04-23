import React from "react";
export function Pedals(props) {
  return (
    <section className="pedal-elements">
      {props.info.map((item) => (
        <div key={item.button}>
          <img src={require(`${item.img}`)} alt={`${item.button} pedal`} />
          <p>{item.p}</p>
          <button>{item.button}</button>
        </div>
      ))}
    </section>
  );
}
