/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Activity5 = ({ color = "#4262FF", className }) => {
  return (
    <svg
      className={`activity-5 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M7.331 15H10L9.2 21.01C9.07641 21.9403 9.61623 22.8314 10.498 23.1526C11.3797 23.4738 12.3662 23.1388 12.87 22.347L20.041 11.074C20.433 10.4582 20.4584 9.67773 20.1072 9.03778C19.756 8.39783 19.084 8.00006 18.354 8H14.996L16 2H7L5.354 12.696C5.2653 13.2728 5.43293 13.8595 5.81295 14.3024C6.19296 14.7453 6.74744 15.0001 7.331 15ZM8.716 4H13.638L12.634 10H18.354L11.18 21.274L12.283 13H7.33L8.716 4Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Activity5.propTypes = {
  color: PropTypes.string,
};
