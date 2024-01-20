/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SegmentedControl = ({ selected, className, divClassName, text = "Active", text1 = "Inactive" }) => {
  return (
    <div className={`segmented-control selected-${selected} ${className}`}>
      <div className={`inactive ${divClassName}`}>
        {!selected && <>{text1}</>}

        {selected && <>{text}</>}
      </div>
    </div>
  );
};

SegmentedControl.propTypes = {
  selected: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
};
