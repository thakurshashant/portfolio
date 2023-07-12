import React from "react";
import ProjectItem from "./ProjectItem";
import arvrImg from "../assets/arvr.jpg";
import cryptoImg from "../assets/crypto.jpg";
import netflixImg from "../assets/netflix.jpg";
import redditImg from "../assets/reddit.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4  py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta
        officia, recusandae incidunt fugit doloremque ab? Vitae, autem provident
        corporis facilis voluptate animi, alias veritatis corrupti et beatae
        maxime a.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={cryptoImg} title="Crypto App" />
        <ProjectItem img={arvrImg} title="Arvr App" />
        <ProjectItem img={netflixImg} title="Netflix App" />
        <ProjectItem img={redditImg} title="Reddit App" />
      </div>
    </div>
  );
};

export default Projects;
