import Header from "@/components/Features/Header";
import Introduce from "@/components/Features/Introduce";
import StickyBar from "@/components/Features/StickyBar";
import AboutMe from "@/components/Features/AboutMe";
import Projects from "@/components/Features/Projects";
import Skills from "@/components/Features/Skills";
import Activities from "@/components/Features/Activities";
import Footer from "@/components/Features/Footer";
import DataSections from "./DataSections";

const sections = [
  { component: Header, id: "Header"},
  { component: Introduce, id: "Introduce" },
  { component: StickyBar },
  { component: AboutMe, id: "AboutMe" },
  { component: Projects, section: DataSections, title: "Projects", id: "Projects" },
  { component: Skills, section: DataSections, title: "Skills", id: "Skills" },
  { component: Activities, section: DataSections, title: "Activities" ,id: "Activities" },
  { component: Footer, id: "Footer" },
];
export { sections };
