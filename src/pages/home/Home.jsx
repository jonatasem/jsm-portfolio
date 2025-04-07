import React from "react";
import { ReactTyped } from "react-typed";
import "./Home.scss";

export default function Home() {
  return (
    <section id="home" className="container-home dark-background">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Jonatas Moreira
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Eu sou{" "}
          <ReactTyped
            strings={[
              " Desenvolvedor front end",
              "Desenvolvedor back end",
              "Designer",
            ]}
            typeSpeed={100}
            backSpeed={80}
            loop
          />
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
        </p>
      </div>
    </section>
  );
}
