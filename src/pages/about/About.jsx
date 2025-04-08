import "./About.scss";

import imgAutor from "../../assets/img/my-profile.jpg";
import { FaAngleRight } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="container-about section">
      <div className="container section-title">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Sobre Mim
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Desenvolvedor de software com experiência na criação de soluções
          robustas e escaláveis, seguindo as melhores práticas. Proficiente em
          frameworks de frontend e backend, com forte ênfase na organização de
          projetos, gerenciamento de estados e segurança.
        </p>
      </div>

      <div className="container">
        <div className="profile-about">
          <div className="container-autor">
            <img
              data-aos="fade-up"
              data-aos-delay="100"
              src={imgAutor}
              alt="imagem do autor"
            />
          </div>
          <div className="content">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Jonatas Elieser Moreira
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Designer &amp; Desenvolvedor Web.
            </p>
            <div className="container-adress">
              <div>
                <ul data-aos="fade-up" data-aos-delay="100">
                  <li>
                    <FaAngleRight />
                    <strong>Aniversário:</strong> <span>13 Janeiro 2001</span>
                  </li>
                  <li>
                    <FaAngleRight />
                    <strong>Website:</strong> <span><a href="https://jonatasmoreira.com">https://jonatasmoreira.com</a></span>
                  </li>
                  <li>
                    <FaAngleRight />
                    <strong>Telefone:</strong>
                    <span>(18) 99193-7096</span>
                  </li>
                  <li>
                    <FaAngleRight />
                    <strong>Cidade:</strong>
                    <span>Lucélia, São Paulo, Brasil</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul data-aos="fade-up" data-aos-delay="100">
                  <li>
                    <FaAngleRight />
                    <strong>Idade:</strong>
                    <span>24</span>
                  </li>
                  <li>
                    <FaAngleRight />
                    <strong>E-Mail:</strong>
                    <span>jonatas.em25@gmail.com</span>
                  </li>
                  <li>
                    <FaAngleRight />
                    <strong>Freelance:</strong> <span>Disponível</span>
                  </li>
                </ul>
              </div>
            </div>
            {/*Section Languages*/}
            <div className="container-languages" data-aos="fade-up" data-aos-delay="100">
              <h2>Idiomas</h2>
              <ul>
                <li>
                  <p>Português - Nativo</p>
                </li>
                <li>
                  <p>Inglês - B1</p>
                </li>
                <li>
                  <p>Espanhol - A2</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
