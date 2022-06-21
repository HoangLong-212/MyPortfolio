import React from "react";
import classNames from "classnames/bind";
import styles from "./ProjectItem.module.scss";
import { FaEye, FaGithub } from "react-icons/fa";
import Button from "../Button";

const cx = classNames.bind(styles);
function ProjectItem({
  hrefWeb,
  hrefGit,
  img,
  title,
  description,
  reverse = false,
}) {
  // const classes = cx("btn-downloadCV", {
  //   [className]: className,
  // });

  return (
    <div className={cx("project-item")}>
      {!reverse ? (
        <div
          className={cx("project-item-img")}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <a href={hrefWeb} target="_blank" rel="noreferrer">
            <img src={img} alt="" />
          </a>
        </div>
      ) : null}

      <div
        className={cx("project-item-content")}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <Button href={hrefWeb} icon={<FaEye className={cx("icon")} />} title="Project" />
        <Button href={hrefGit} icon={<FaGithub className={cx("icon")} />} title="Github" />
      </div>

      {reverse ? (
        <div
          className={cx("project-item-img")}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <a href={hrefWeb} target="_blank" rel="noreferrer">
            <img src={img} alt="" />
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectItem;
