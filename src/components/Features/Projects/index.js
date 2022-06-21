import React from "react";
import ProjectItem from "@/components/General/ProjectItem";

function Projects() {
  return (
    <>
      <ProjectItem
        hrefWeb="https://levart-tripweb.netlify.app/"
        hrefGit="https://github.com/HoangLong-212/Trip_Website.git"
        img={require("@/assets/img/projects-item-4.png")}
        title="Levart - Trip Website"
        description="Built with: ReactJS/SASS/Ant Design/Redux-Saga."
      />
      <ProjectItem
        hrefWeb="https://longtran-portfolio.netlify.app/"
        hrefGit="https://github.com/HoangLong-212/MyPortfolio.git"
        img={require("@/assets/img/projects-item-2.png")}
        title="Portfolio"
        description="Built with: ReactJS/SASS."
        reverse
      />
      <ProjectItem
        hrefWeb="https://manager-project-hl.netlify.app/"
        hrefGit="https://github.com/HoangLong-212/github-Web-quan-ly-de-tai-nghien-cuu.git"
        img={require("@/assets/img/projects-item-1.png")}
        title="Scientific Research Projects Management Website"
        description="Built with: ReactJS/Redux-Saga/MongoDB/Ant Design."
      />
      <ProjectItem
        hrefWeb="https://writady.netlify.app/"
        hrefGit="https://github.com/HoangLong-212/writady.git"
        img={require("@/assets/img/projects-item-3.png")}
        title="Writady"
        description="Built with: HTML/CSS/Javascript."
        reverse
      />
    </>
  );
}

export default Projects;
