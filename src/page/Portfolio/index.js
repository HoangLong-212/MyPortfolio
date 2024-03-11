import React from "react";
import { sections } from "@/components/Sections";

function Portfolio() {
  return (
    <div>
      {sections.map((section, index) => {
        const Part = section.component;
        if (section.display) {
          if (section.section === undefined) {
            return (
              <div key={index} id={section.id}>
                <Part />
              </div>
            );
          } else
            return (
              <section.section key={index} title={section.title} id={section.id} style={section.title === "Skills" ? { backgroundColor: "#f5f5f5" } : null}>
                <Part />
              </section.section>
            );
        }
      })}
    </div>
  );
}

export default Portfolio;
