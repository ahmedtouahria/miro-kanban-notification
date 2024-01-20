/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Activity5 } from "../../icons/Activity5";
import "./style.css";

export const ButtonIcon = ({ size, state, icon = <Activity5 className="activity-8" color="#050038" /> }) => {
  return (
    <div className={`button-icon ${state} ${size}`}>
      {size === "medium" && ["default", "disabled", "hover"].includes(state) && (
        <Activity5 className="activity-6" color={state === "hover" ? "#4262FF" : "#050038"} />
      )}

      {(size === "small" || state === "focus") && (
        <div className="button-wrapper">
          {["default", "disabled", "hover"].includes(state) && <>{icon}</>}

          {state === "focus" && (
            <div className="div">
              {size === "medium" && <Activity5 className="activity-3" color="#4262FF" />}

              {size === "small" && (
                <div className="overlap-group">
                  <Activity5 className="activity-8" color="#4262FF" />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

ButtonIcon.propTypes = {
  size: PropTypes.oneOf(["medium", "small"]),
  state: PropTypes.oneOf(["disabled", "hover", "focus", "default"]),
};
