import React from "react";
import classNames from "classnames/bind";
import styles from "./Activities.module.scss";
import ActivitiesItem from "@/components/General/ActivitiesItem";

const cx = classNames.bind(styles);
function Activities() {
  return (
    <div className={cx("activity-tree")}>
      <ActivitiesItem
        info={{
          time: "October 2020 - May 2021",
          role: "Event Leader",
          event: "Manh Ghep Moi Campaign 2021",
        }}
        description={["Ensure 12 members follow the campaign plan", "Organize successfully 03 activities with the participation of 100 volunteers and attract nearly 1,000 people"]}
      />

      <ActivitiesItem
        info={{
          time: "January 2020 - February 2020",
          role: "Deputy Head",
          event: "Department of The Volunteer Spring Campaign 2020",
        }}
        description={["Make a fundraising plan with the members", "Support members to ensure that plan is right on schedule"]}
      />

      <ActivitiesItem
        info={{
          time: "October 2019 - May 2020",
          role: "Member",
          event: "Manh Ghep Moi Campaign 2020",
        }}
        description={["Come up with ideas for the campaign"]}
      />
    </div>
  );
}

export default Activities;
