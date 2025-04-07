import "./styles/App.scss";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Imports Components
import Mobile from "./components/mobile/Mobile";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

// Imports Pages
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Portfolio from "./pages/portfolio/Portfolio";
import ScrollToTop from "./components/scroll/ScrollToTop";

export default function App() {
  // controla o estado do menu-mobile
  const [mobile, setMobile] = useState(false);

  const mobClick = () => {
    setMobile(!mobile);
  };

  // função aos scroll
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
    });
  }, []);

  return (
    <>
      <section className="container-app">
        <article className={`app-header ${mobile ? "header-mobile" : ""}`}>
          <Header />
          <Mobile mobClick={mobClick} />
        </article>
        <article className="app-center">
          <Home />
          <About />
          <Resume />
          <Portfolio />
          <Skills />
          <Footer />
        </article>
        <ScrollToTop />
      </section>
    </>
  );
}
