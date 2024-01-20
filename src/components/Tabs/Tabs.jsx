/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SegmentedControl } from "../SegmentedControl";
import "./style.css";

export const Tabs = ({
  pills,
  className,
  segmentedControlDivClassName,
  segmentedControlText = "Active",
  segmentedControlDivClassNameOverride,
  segmentedControlText1 = "Inactive",
  segmentedControlDivClassName1,
  segmentedControlText2 = "Inactive",
}) => {
  return (
    <div className={`tabs ${pills} ${className}`}>
      <SegmentedControl
        className="segmented-control-pill"
        divClassName={`${
          pills === "four-pills" ? "class" : pills === "two-pills" ? "class-2" : segmentedControlDivClassName
        }`}
        selected
        text={pills === "three-pills" ? segmentedControlText : "Active"}
      />
      <SegmentedControl
        className="segmented-control-pill-instance"
        divClassName={`${
          pills === "three-pills"
            ? segmentedControlDivClassNameOverride
            : pills === "four-pills"
            ? "segmented-control-instance"
            : "class-3"
        }`}
        selected={false}
        text1={pills === "three-pills" ? segmentedControlText1 : "Inactive"}
      />
      {["four-pills", "three-pills"].includes(pills) && (
        <SegmentedControl
          className="segmented-control-pill-instance"
          divClassName={`${pills === "four-pills" ? "segmented-control-instance" : segmentedControlDivClassName1}`}
          selected={false}
          text1={pills === "four-pills" ? "Inactive" : segmentedControlText2}
        />
      )}

      {pills === "four-pills" && (
        <SegmentedControl
          className="segmented-control-pill-instance"
          divClassName="segmented-control-instance"
          selected={false}
          text1="Inactive"
        />
      )}
    </div>
  );
};

Tabs.propTypes = {
  pills: PropTypes.oneOf(["four-pills", "two-pills", "three-pills"]),
  segmentedControlText: PropTypes.string,
  segmentedControlText1: PropTypes.string,
  segmentedControlText2: PropTypes.string,
};
