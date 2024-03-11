import React from "react";
import classNames from "classnames/bind";
import styles from "./Skills.module.scss";

const cx = classNames.bind(styles);
function Skills() {
  return (
    <div className={cx("skills-list")} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div className={cx("skills-list-item")}>
        <h3>Programming Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>HTML, CSS</li>
          <li>C++</li>
          <li>C# (base)</li>
          <li>Java (base)</li>
        </ul>
      </div>
      <div className={cx("skills-list-item")}>
        <h3>Frameworks & Library</h3>
        <ul>
          <li>ReactJS</li>
          <li>Ant Design</li>
        </ul>
        <h3>English</h3>
        <ul>
          <li>Basic communication skills</li>
          <li>Have a capability to understand technical materials</li>
        </ul>
      </div>
      <div className={cx("skills-list-item")}>
        <h3>Databases</h3>
        <ul>
          <li>SQL Sever</li>
          <li>MongoDB</li>
        </ul>
        <h3>Version Control</h3>
        <ul>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
