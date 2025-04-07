import "./Skills.scss";

export default function Skills() {
  return (
    <section id="skills" className="container-skills light-background">
      <div className="container section-title">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Skills
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Relacionadas ao conhecimento prático em tecnologias, ferramentas e
          métodos. Exemplos incluem programação em linguagens como JavaScript e
          Python, uso de bancos de dados SQL, design de interfaces (UI/UX), e
          desenvolvimento de software.
        </p>
      </div>

      <div className="container">
        <div className="skills-content skills-animation">
          <div>
            <SkillProgress skill="HTML" value={90} />
            <SkillProgress skill="CSS" value={90} />
            <SkillProgress skill="JavaScript" value={90} />
            <SkillProgress skill="Python" value={10} />
          </div>

          <div>
            <SkillProgress skill="Node.js" value={80} />
            <SkillProgress skill="MongoDB" value={60} />
            <SkillProgress skill="Firebase" value={60} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillProgress({ skill, value }) {
  return (
    <div className="progress" data-aos="fade-up"
    data-aos-delay="100">
      <span className="skill">
        <span>{skill}</span> <i className="val">{value}%</i>
      </span>
      <div
        className="progress-bar-wrap"
      >
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
