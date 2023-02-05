import React from "react";

export default function Featured() {
  return (
    <section className="section-feature">
      <div className="section-feature__item">
        <img
          src="/images/gerringong.jpg"
          alt="Gerringong"
          className="section-feature__img"
        />
        <div className="section-feature__titles">
          <h1>Gerringong</h1>
        </div>
      </div>
      <div className="section-feature__item">
        <img
          src="/images/byron-bay.jpg"
          alt="Byron Bay"
          className="section-feature__img"
        />
        <div className="section-feature__titles">
          <h1>Byron Bay</h1>
        </div>
      </div>
      <div className="section-feature__item">
        <img
          src="/images/cairns.png"
          alt="Cairns"
          className="section-feature__img"
        />
        <div className="section-feature__titles">
          <h1>Cairns</h1>
        </div>
      </div>
    </section>
  );
}
