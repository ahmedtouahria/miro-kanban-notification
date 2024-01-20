import React from "react";
import { Activity } from "../../components/Activity";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Tabs } from "../../components/Tabs";
import { TwentyFourCommentFeedback } from "../../icons/TwentyFourCommentFeedback";
import { TwentyFourPlay1 } from "../../icons/TwentyFourPlay1";
import { TwentyFourSettings } from "../../icons/TwentyFourSettings";
import "./style.css";

export const AppBody = () => {
  return (
    <div className="app-body">
      <div className="tabs-wrapper">
        <Tabs
          className="tabs-instance"
          pills="three-pills"
          segmentedControlDivClassName="design-component-instance-node"
          segmentedControlDivClassName1="tabs-3"
          segmentedControlDivClassNameOverride="tabs-2"
          segmentedControlText="Send"
          segmentedControlText1="Users"
          segmentedControlText2="Settings"
        />
      </div>
      <div className="note-wrapper">
        <div className="banner-flat">
          <div className="column">
            <div className="text">
              <p className="p-medium">From Miro to all !</p>
              <p className="text-wrapper">send notification events to all platform from one place !</p>
            </div>
            <img className="vector" alt="Vector" src="/img/vector.svg" />
          </div>
        </div>
      </div>
      <button className="button-text-icon">
        <div className="focus-wrapper">
          <button className="content-wrapper">
            <div className="content">
              <TwentyFourPlay1 className="element-play" />
              <div className="text-2">Start</div>
            </div>
          </button>
        </div>
      </button>
      <div className="app-footer">
        <div className="div-wrapper">
          <div className="content-2">
            <div className="iconset">
              <div className="frame">
                <div className="button-icon-2">
                  <div className="element-comment-feedback-wrapper">
                    <TwentyFourCommentFeedback className="element-comment-feedback" color="#5F5C80" />
                  </div>
                </div>
                <TwentyFourSettings className="element-settings" />
                <ButtonIcon icon={<Activity />} size="small" state="default" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
