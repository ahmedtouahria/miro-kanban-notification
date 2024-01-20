import { ButtonIcon } from ".";

export default {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "hover", "focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "medium",
    state: "disabled",
  },
};
