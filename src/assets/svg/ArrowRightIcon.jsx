import React from "react";

/* eslint-disable react/prop-types */
const ArrowRightIcon = ({ fill }) => {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.745899 15.7589C0.44784 15.4667 0.420743 15.0095 0.66461 14.6873L0.745899 14.595L7.47342 8L0.745899 1.40503C0.44784 1.11283 0.420743 0.655583 0.66461 0.333375L0.745899 0.241064C1.04396 -0.0511349 1.51037 -0.0776984 1.83904 0.161374L1.93321 0.241064L9.2541 7.41802C9.55216 7.71022 9.57926 8.16746 9.33539 8.48967L9.2541 8.58198L1.93321 15.7589C1.60534 16.0804 1.07376 16.0804 0.745899 15.7589Z"
        fill={fill || "black"}
      />
    </svg>
  );
};

export default ArrowRightIcon;
