import React from "react";
import PropTypes from "prop-types";

ArrowDown.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};
export default function ArrowDown({ height, width }) {
  return (
    <svg
      width={`${width ? width : 20}px`}
      height={`${height ? height : 20}px`}
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 1L8 7.75L14.75 1"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
