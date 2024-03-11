import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("pc-tablet")}>
        <img src={require("@/assets/img/logo.png")} className={cx("logo")} alt="logo" />
        <div className={cx("header-navigation")}>
          <ul className={cx("nav-list")}>
            <li>
              <a href="#Introduce">Long</a>
            </li>
            <li>
              <a href="#AboutMe">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Activities">Activities</a>
            </li>
            <li>
              <a href="#Footer">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={cx("mobile")}>
        <div className={cx("title")}>
          <strong>Long Tran</strong>
        </div>

        <input type="checkbox" className={cx("check")} id="check" />
        <label for="check">
          <CgMenuLeftAlt className={cx("btn-menu-1")} />
          <MdClose className={cx("btn-menu-2")} />
        </label>
        <div className={cx("left-menu")}>
          <header>My Portfolio</header>
          <ul className={cx("nav-list")}>
            <li>
              <a href="#Introduce">Long</a>
            </li>
            <li>
              <a href="#AboutMe">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Activities">Activities</a>
            </li>
            <li>
              <a href="#Footer">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
