import "./Portfolio.scss";

import imgGraphic from "../../assets/img/projects/graphic.png";
import imgApiMovies from "../../assets/img/projects/api-movies.png";
import imgColognese from "../../assets/img/projects/colognese.png";
import imgDoisIrmaos from "../../assets/img/projects/dois-irmaos.png";
import imgEcommerce from "../../assets/img/projects/e-commerce.png";
import imgFrontMovies from "../../assets/img/projects/front-movies.png";
import imgCologneseTwo from "../../assets/img/projects/colognese-client.png";
import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("*");

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <section id="portfolio" className="container-portfolio light-background">
      <div className="section-title">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Portfólio
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Aqui estão alguns dos projetos que desenvolvi ao longo da minha
          carreira. Cada um deles reflete minha paixão por criar soluções
          eficazes e inovadoras, utilizando as melhores práticas de
          desenvolvimento e design.
        </p>
      </div>
      <div
        className="portfolio-filters"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          className={filter === "*" ? "active" : ""}
          onClick={() => handleFilterClick("*")}
        >
          Todos
        </button>
        <button
          className={filter === ".filter-app" ? "active" : ""}
          onClick={() => handleFilterClick(".filter-app")}
        >
          Front End
        </button>
        <button
          className={filter === ".filter-product" ? "active" : ""}
          onClick={() => handleFilterClick(".filter-product")}
        >
          Back End
        </button>
        <button
          className={filter === ".filter-branding" ? "active" : ""}
          onClick={() => handleFilterClick(".filter-branding")}
        >
          Full Stack
        </button>
        <button
          className={filter === ".filter-books" ? "active" : ""}
          onClick={() => handleFilterClick(".filter-books")}
        >
          Design
        </button>
      </div>
      <div className="portfolio-items" data-aos="fade-up" data-aos-delay="100">
        {projects
          .filter(
            (project) =>
              filter === "*" || project.filterClass === filter.slice(1),
          )
          .map((project) => (
            <PortfolioItem
              key={project.title}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              filterClass={project.filterClass}
            />
          ))}
      </div>
    </section>
  );
}

const projects = [
  {
    imgSrc: imgGraphic,
    title: "Página de Avaliação",
    description:
      "Aplicação front end desenvolvida com React.js e ApexCharts para visualização de dados.",
    filterClass: "filter-app",
  },
  {
    imgSrc: imgColognese,
    title: "Colognese Brigaderia",
    description:
      "Desenvolvimento front end utilizando Vite e React.js para um sistema de gerenciamento de vendas.",
    filterClass: "filter-app",
  },
  {
    imgSrc: imgDoisIrmaos,
    title: "Estética Automotiva - Dois Irmãos",
    description:
      "Aplicação full stack utilizando Node.js, Express, Firebase e React.js para gerenciar serviços automotivos.",
    filterClass: "filter-branding",
  },
  {
    imgSrc: imgEcommerce,
    title: "E-Commerce",
    description:
      "Desenvolvido com React.js, focando no gerenciamento de estado com Redux para uma experiência de compra fluida.",
    filterClass: "filter-books",
  },
  {
    imgSrc: imgFrontMovies,
    title: "Look Trailers",
    description:
      "Aplicação front end criada com React.js, conectando-se a um back end para requisições de trailers de filmes.",
    filterClass: "filter-app",
  },
  {
    imgSrc: imgApiMovies,
    title: "API Look Trailers",
    description:
      "Aplicação back end desenvolvida com Node.js e Express para fornecer dados de trailers de filmes.",
    filterClass: "filter-product",
  },
  {
    imgSrc: imgCologneseTwo,
    title: "Colognese 2.0",
    description:
      "Aplicação full stack utilizando Node.js, Express, Firebase, Google e React.js, aprimorando o sistema de vendas.",
    filterClass: "filter-branding",
  },
];

function PortfolioItem({ imgSrc, title, description, filterClass }) {
  return (
    <div className={`portfolio-item ${filterClass}`}>
      <div className="portfolio-content">
        <img src={imgSrc} alt={title} />
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href={imgSrc} title={title} className="preview-link">
            🔍
          </a>
          <a
            href="portfolio-details.html"
            title="Mais Detalhes"
            className="details-link"
          >
            🔗
          </a>
        </div>
      </div>
    </div>
  );
}
