/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { HiMail, HiPhone } from "react-icons/hi";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("footer-container")}>
        <img src={require("@/assets/img/logo-white.png")} alt="logo" />
        <div className={cx("footer-contact")}>
          <h2>CONTACT</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <p>
            <HiMail className={cx("footer-icon")} />
            longtran2132000@gmail.com
          </p>
          <p>
            <HiPhone className={cx("footer-icon")} />
            0523 195 504
          </p>
          <a href="#" className={cx("footer-btn")}>
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
