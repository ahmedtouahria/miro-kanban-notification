import React from "react";
import { ActivityWrapper } from "./ActivityWrapper/ActivityWrapper";
import { ButtonIcon } from "./ButtonIcon";
import { CommentFeedback } from "./CommentFeedback/CommentFeedback";
import { Play } from "./Play";
import { Settings } from "./Settings/Settings";
import { Tabs } from "./Tabs/Tabs";
import * as classes from "../assets/style.module.css"
export const AppBody = () => {
  return (
    <div className={classes["app-body"]}>
      <div className={classes["tabs-wrapper"]}>
        <Tabs
          className={classes["tabs-instance"]}
          pills={classes["three-pills"]}
          segmentedControlDivClassName={classes["design-component-instance-node"]}
          segmentedControlDivClassName1={classes["tabs-3"]}
          segmentedControlDivClassNameOverride={classes["tabs-2"]}
          segmentedControlText="Send"
          segmentedControlText1="Users"
          segmentedControlText2="Settings"
        />
      </div>
      <div className={classes["note-wrapper"]}>
        <div className={classes["banner-flat"]}>
          <div className={classes["column"]}>
            <div className={classes["text"]}>
              <p className={classes["p-medium"]}>From Miro to all !</p>
              <p className={classes["text-wrapper"]}>send notification events to all platform from one place !</p>
            </div>
            <img className={classes["vector"]} alt="Vector" src="vector.svg" />
          </div>
        </div>
      </div>
      <button className={classes["button-text-icon"]}>
        <div className={classes["focus-wrapper"]}>
          <button className={classes["content-wrapper"]}>
            <div className={classes["content"]}>
              <Play className={classes["element-play"]} />
              <div className={classes["div"]}>Start</div>
            </div>
          </button>
        </div>
      </button>
      <div className={classes["app-footer"]}>
        <div className={classes["div-wrapper"]}>
          <div className={classes["content-2"]}>
            <div className={classes["iconset"]}>
              <div className={classes["frame"]}>
                <div className={classes["button-icon-2"]}>
                  <div className={classes["element-comment-feedback-wrapper"]}>
                    <CommentFeedback className={classes["element-comment-feedback"]} color="#5F5C80" />
                  </div>
                </div>
                <Settings className={classes["element-settings"]} />
                <ButtonIcon icon={<ActivityWrapper />} size={classes["small"]} state={classes["default"]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
