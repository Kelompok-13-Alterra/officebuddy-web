import React, { useMemo } from "react";
import { StarEmptyIcon, StarIcon } from "../../assets/svg";

/* eslint-disable react/prop-types */
const RatingStar = ({ rating = 0 }) => {
  const number = useMemo(() => {
    if (Number(rating) > 5) {
      return 5;
    }
    if (Number(rating) < 0) {
      return 0;
    }
    return Number(rating);
  }, [rating]);

  return (
    <div className="flex gap-1">
      {Array(number)
        .fill(null)
        .map((_, index) => (
          <StarIcon key={index} />
        ))}

      {Array(5 - number)
        .fill(null)
        .map((_, index) => (
          <StarEmptyIcon key={index} />
        ))}
    </div>
  );
};

export default RatingStar;
