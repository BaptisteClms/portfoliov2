import React, { useRef } from "react";
import "../styles/accueil.css";
import CV from "../images/CV.pdf"

const Accueil = () => {
  let form = require("../images/form.png");
  let img1Projet = require("../images/projet1.png");
  let img2Projet = require("../images/projet2.png");
  let github = require("../images/github.png");
  let linkedIn = require("../images/linkedin.png");
  let mail = require("../images/mail.png");

  const projectDiv = useRef();

  function scrollToProject() {
    projectDiv.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <section>
        <div id="fullDescription">
          <div>
            <h4 id="h4Title">développeur full stack</h4>
          </div>
          <div id="h1Title">
            <h1>Bonjour, je m'appelle Baptiste Couloumies</h1>
          </div>
          <p id="descriptionAccueil">
            Activement à la recherche d’une entreprise pour un contrat d'alternance en développement web afin d'avoir un aperçu de ce qu'il se passe 
            dans le cadre professionnel et par la même occasion, avoir la chance de poursuivre mes études et de valider mon diplôme. 
            Je m'intéresse à tout ce qui est lié à la programmation et aux jeux vidéo, j'ai décidé de développer mes
            compétences dans ce domaine.
          </p>
          <div>
            <a>
              <button onClick={scrollToProject} id="btn1Accueil">Projets</button>
            </a>
            <a href="https://www.linkedin.com/in/baptiste-couloumies-42736b1ab/" target="_blank">
              <button id="btn2Accueil">LinkedIn</button>
            </a>
          </div>
        </div>
        <div>
          <img id="shapeTopLeft" src={form} alt="shapeTopLeft" />
        </div>
      </section>
      <section id="goToCv">
        <div>
          <h1 id="cvTitle">CV</h1>
        </div>
        <div id="btnCv1">
          <button id="btnCv2">
            <a id="hrefBtnCv" href={CV} download>
              Télécharger mon CV
            </a>
          </button>
        </div>
      </section>
      <section id="goToProjets">
        <div id="divProjectTitle">
          <h1 ref={projectDiv} id="projectsTitle">Projets</h1>
        </div>
        <div id="divProjects">
          <div id="allContainProject">
            <div>
              <h1 id="titleProject">Tirage au sort - Noël</h1>
              <p id="descriptionProjet">
                Application découpée en 3 pages différentes qui consiste à tirer
                au sort les personnes qui se sont inscrites sur le site.
              </p>
              <a href="https://github.com/Aekyu/Projet-Noel">
                {" "}
                <button id="btnProject">Jeter un œil</button>
              </a>
            </div>
          </div>
          <div>
            <img id="imgProject" src={img1Projet} alt="" />
          </div>
        </div>
        <div id="divProjects">
          <img id="imgProjectReverse" src={img2Projet} alt="" />
          <div id="allContainProjectReverse">
            <div>
              <h1 id="titleProject">Manipulation API - TMDB</h1>
              <p id="descriptionProjet">
                Site permettant de trier les films gratuits et les films
                populaires avec la possibilité de scroll horizontalement, ainsi
                qu'une autre page avec un système de pagination.
              </p>
              <a href="https://github.com/Aekyu/tpReactTmdb">
                {" "}
                <button id="btnProject">Jeter un œil</button>
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section>
        <div id="icons">
          <a href="https://github.com/BaptisteClms" target="_blank">
            <img id="iconsGit" src={github} alt="githubLink" />
          </a>
          <a href="https://www.linkedin.com/in/baptisteclms/" target="_blank">
            <img id="iconsLinkedIn" src={linkedIn} alt="linkedInLink" />
          </a>
          <a href="mailto:baptiste.clms@gmail.com" target="_blank">
            <img id="iconsMail" src={mail} alt="mailLink" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Accueil;
