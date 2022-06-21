import React from "react";
import classNames from "classnames/bind";
import styles from "./StickyBar.module.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaGithub } from "react-icons/fa";

const cx = classNames.bind(styles);
function StickyBar() {
  return (
    <div className={cx("stickyBar")}>
        <ul className={cx("sticky-list")}>
            <li><a href="https://www.facebook.com/thlonng21.2/" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://www.instagram.com/lg21_2/" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/in/longth/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
            <li><a href="https://github.com/HoangLong-212" target="_blank" rel="noreferrer"><FaGithub/></a></li>
        </ul>
    </div>
   
  )
}

export default StickyBar;
