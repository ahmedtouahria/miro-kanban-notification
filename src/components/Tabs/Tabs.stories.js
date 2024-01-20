import { Tabs } from ".";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    pills: {
      options: ["four-pills", "two-pills", "three-pills"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    pills: "four-pills",
    className: {},
    segmentedControlDivClassName: {},
    segmentedControlText: "Active",
    segmentedControlDivClassNameOverride: {},
    segmentedControlText1: "Inactive",
    segmentedControlDivClassName1: {},
    segmentedControlText2: "Inactive",
  },
};
