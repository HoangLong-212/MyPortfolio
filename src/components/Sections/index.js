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
  { component: Header, id: "Header", display: true },
  { component: Introduce, id: "Introduce", display: true },
  { component: StickyBar, display: false },
  { component: AboutMe, id: "AboutMe", display: true },
  { component: Projects, section: DataSections, title: "Projects", id: "Projects", display: true },
  { component: Skills, section: DataSections, title: "Skills", id: "Skills", display: true },
  { component: Activities, section: DataSections, title: "Activities", id: "Activities", display: true },
  { component: Footer, id: "Footer", display: true },
];
export { sections };
