import React from "react";
import classNames from "classnames/bind";
import styles from "./AboutMe.module.scss";
import Button from "@/components/General/Button";

const cx = classNames.bind(styles);
function AboutMe() {
  return (
    <div className={cx("about-me")}>
      <div className={cx("about-me-container")}>
        <img src={require("@/assets/img/about-me.png")} alt="about me" className={cx("img")} />
        <div className={cx("about-me-description")}>
          <p>About me</p>
          <p>Front-End Developer</p>
          <br />
          <p>
            Hello, my name is
            <i> Tran Hoang Long. </i>I am a third-year student majoring in Software Engineering at the
            <i> University of Information Technology (UIT). </i>
          </p>
          <br />
          <p>I have experience in working with HTML/CSS, Javascript, and UX/UI design for university projects and personal projects. Equipped with excellent communication skills, management skills, and leadership through the role of the Union - Association activities.</p>
          <Button className={cx("btn")} href="https://drive.google.com/file/d/1rwDeVs7dYZJdNgPUdk6Go7bWLm-CgULP/view?usp=sharing" title="Download CV" c />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
