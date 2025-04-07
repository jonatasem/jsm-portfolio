import "./Resume.scss";

export default function Resume() {
  return (
    <section id="resume" className="container-resume section">
      <div className="container section-title">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Resumo
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Ao longo da minha carreira, tive a oportunidade de realizar diversos
          projetos que abrangem desde o design de interfaces no Figma até a
          transformação de layouts em aplicações funcionais. Sou capaz de
          integrar o front-end com o back-end, utilizando tecnologias como React
          e Node.js, garantindo uma comunicação eficiente entre as camadas da
          aplicação.
        </p>
        <p data-aos="fade-up" data-aos-delay="100" className="resume-p">
          Minha experiência inclui a implementação de APIs RESTful e a
          utilização de bancos de dados como MongoDB e MySQL, o que me permite
          gerenciar dados de forma eficaz. Além disso, aplico metodologias ágeis
          para otimizar o fluxo de trabalho e promover a colaboração em equipe.
          Estou sempre em busca de soluções criativas que melhorem a experiência
          do usuário e atendam às necessidades do mercado.
        </p>
      </div>

      <div className="container">
        <div>
          <div>
            <h3
              className="resume-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Sumário
            </h3>
            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Jonatas Elieser Moreira</h4>
              <p>
                <em>
                  Desenvolvedor de software com experiência na criação de
                  soluções robustas e escaláveis, seguindo as melhores práticas.
                  Proficiente em frameworks de frontend e backend, com forte
                  ênfase na organização de projetos, gerenciamento de estados e
                  segurança.
                </em>
              </p>
            </div>

            <h3
              className="resume-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Educação
            </h3>
            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Bacharel em Engenharia da Computação</h4>
              <h5>Junho de 2023 - Julho de 2028</h5>
              <p>
                <em>Univesp, Lucélia, São Paulo, Brasil</em>
              </p>
              <p>
                Formação sólida em desenvolvimento de software, com foco na
                criação de soluções inovadoras e escaláveis.
              </p>
            </div>

            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Ensino Médio Integrado com Técnico em Agropecuária</h4>
              <h5>Concluído em 2018</h5>
              <p>
                <em>E.T.E.C Herval Bellusci, Adamantina, São Paulo, Brasil</em>
              </p>
              <p>
                Formação técnica com ênfase em práticas de agropecuária e
                desenvolvimento de habilidades práticas.
              </p>
            </div>
          </div>

          <div>
            <h3
              className="resume-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Experiência Profissional
            </h3>
            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Desenvolvedor Fullstack | Mecânica Automotiva</h4>
              <h5>Fev de 2024 - Fev de 2025</h5>
              <p>
                <em>Mecânica Automotiva, Flórida Paulista</em>
              </p>
              <ul>
                <li>
                  Criei uma API RESTful com Node.js e Express para gerenciar
                  operações de CRUD de produtos, clientes e vendas.
                </li>
                <li>
                  A aplicação contribuiu para uma redução de 90% no tempo de
                  processamento de vendas, além de implementar QR Code para
                  visualização da nota fiscal.
                </li>
              </ul>
            </div>

            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Desenvolvedor Fullstack | Colognese Brigaderia</h4>
              <h5>Jan de 2023 - Fev de 2024</h5>
              <p>
                <em>Colognese Brigaderia, Adamantina</em>
              </p>
              <ul>
                <li>
                  Responsável por implementar um sistema de gerenciamento de
                  produtos, clientes e vendas.
                </li>
                <li>
                  Implementei autenticação de usuários via Google e integração
                  com PayPal para pagamentos.
                </li>
                <li>
                  A solução melhorou a experiência do usuário, aumentando o
                  volume de vendas em 25% e reduzindo o tempo de checkout em
                  45%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
