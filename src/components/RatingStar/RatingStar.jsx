import React, { useCallback, useEffect, useState } from "react";
import { StarEmptyIcon, StarIcon, StarHalfIcon } from "../../assets/svg";

/* eslint-disable react/prop-types */
const RatingStar = ({ rating = 0 }) => {
  const [isHalf, setIsHalf] = useState(false);
  const [starCount, setStarCount] = useState(0);

  const getNumber = useCallback(() => {
    if (Number(rating) > 5) {
      setStarCount(5);
    }
    if (Number(rating) < 0) {
      setStarCount(0);
    }

    const portion = (Number(rating) % 1).toFixed(2);
    if (portion > 0) {
      setIsHalf(true);
      setStarCount(Math.floor(Number(rating)));
    } else {
      setStarCount(Number(rating));
    }
  }, [rating]);

  useEffect(() => {
    getNumber();
  }, []);

  return (
    <div className="flex gap-1">
      {Array(starCount)
        .fill(null)
        .map((_, index) => (
          <StarIcon key={index} />
        ))}

      {isHalf ? (
        <>
          <StarHalfIcon />
          {Array(5 - (starCount + 1))
            .fill(null)
            .map((_, index) => (
              <StarEmptyIcon key={index} />
            ))}
        </>
      ) : (
        Array(5 - starCount)
          .fill(null)
          .map((_, index) => <StarEmptyIcon key={index} />)
      )}
    </div>
  );
};

export default RatingStar;
