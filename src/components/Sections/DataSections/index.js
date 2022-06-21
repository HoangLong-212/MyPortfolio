import React from "react";
import classNames from "classnames/bind";
import styles from "./DataSections.module.scss";

const cx = classNames.bind(styles);
function DataSections({ children, title, id, ...props }) {
  return (
    <div id={id} className={cx("wrapper")} {...props}>
      <p className={cx("title")} data-aos="fade-right" data-aos-duration="1000">
        {title}
      </p>
      {children}
    </div>
  );
}

export default DataSections;
