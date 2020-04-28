import React from "react";

export function Welcome({ title, text }) {
  return (
    <section className="welcome">
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
