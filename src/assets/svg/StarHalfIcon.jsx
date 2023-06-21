import React from "react";

const StarHalfIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="half_grad">
          <stop offset="50%" stopColor="#F8C74E" />
          <stop offset="50%" stopColor="#ABABAF" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M12 18.732L19.21 23.0837L17.2967 14.882L23.6667 9.36366L15.2783 8.65199L12 0.916992L8.72168 8.65199L0.333344 9.36366L6.70334 14.882L4.79001 23.0837L12 18.732Z"
        fill="url(#half_grad)"
      />
    </svg>
  );
};

export default StarHalfIcon;
