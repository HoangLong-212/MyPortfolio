import React from "react";
import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";
import Button from "@/components/General/Button";

const cx = classNames.bind(styles);
function Introduce() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("introduce")}>
        <p>Hello,</p>
        <h1>I’M HOANG LONG</h1>
        <p>I am Front-End Developer</p>
        <Button href="https://drive.google.com/file/d/1rwDeVs7dYZJdNgPUdk6Go7bWLm-CgULP/view?usp=sharing" title="Download CV" />
      </div>
      <img src={require("@/assets/img/about-me.png")} alt="about me" className={cx("img-mobile")} />
    </div>
  );
}

export default Introduce;
