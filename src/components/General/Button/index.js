import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({ href, title, icon, className }) {
  const classes = cx("btn-downloadCV", {
    [className]: className
  });

  return (
    <a
      className={classes}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
     {title}
    </a>
  );
}

export default Button;
