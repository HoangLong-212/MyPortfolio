import React from "react";
import classNames from "classnames/bind";
import styles from "./ActivitiesItem.module.scss";

const cx = classNames.bind(styles);
function ActivitiesItem({ info, description }) {
  return (
    <div
      className={cx("activity-item")}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <p>{info.time}</p>
      <h2>{info.role}</h2>
      <p>{info.event}</p>
      <ul>
        {description.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActivitiesItem;
