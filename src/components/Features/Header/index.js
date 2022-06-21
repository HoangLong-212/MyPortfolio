import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
        <img src={require("@/assets/img/logo.png")} className={cx("logo")} alt="logo" />
        <div className={cx("header-navigation")}>
          <ul className={cx("nav-list")}>
            <li><a href="#Introduce">Long</a></li>
            <li><a href="#AboutMe">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Activities">Activities</a></li>
            <li><a href="#Footer">Contact</a></li>
          </ul>
        </div>
  </div>
  )
}

export default Header;
