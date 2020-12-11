import React from "react";

const About = () => {
  return (
    <section id="about">
      <div
        className="ui  raised segment"
        style={{ backgroundColor: "transparent" }}
      >
        <img
          src=""
          className="ui small left floated circular image"
          // style={{ height: "205px", width: "210px" }}
          alt="dream"
        />
        <h2>About Me</h2>
        <p>
          Sou a Beta e estou em reconversão de carreira. <br />
          Neste momento estou a terminar o nível V, CET - Técnico Especialista
          Gestão de Redes e Sistemas Informáticos, procuro oportunidade de
          trabalho, estando elegível para estágio profissional através do IEFP.{" "}
          <br />
          Sou entusiasta, tenho facilidade de aprendizagem, gosto pelo trabalho
          em equipa, sou curiosa, determinada e persistente. <br />
          Tenho especial interesse no universo Web, JavaScript, Python, HTML,
          CSS, Bootstrap e React, <br />
          assim como em administração de sistemas.
        </p>
      </div>
    </section>
  );
};

export default About;
