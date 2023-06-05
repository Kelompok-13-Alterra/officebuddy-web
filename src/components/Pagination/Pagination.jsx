import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/svg";

/* eslint-disable react/prop-types */
const Pagination = ({ currentPage, pageSize, dataLength, onClickPage }) => {
  const totalPage = Math.ceil(dataLength / pageSize);
  const pageArr = Array.from({ length: totalPage }, (_, index) => 1 + index);

  const pageRange = () => {
    if (pageArr.length > 5) {
      if (currentPage <= 2) {
        return [...pageArr.slice(0, 4), totalPage];
      }
      if (currentPage > totalPage - 2) {
        return [1, ...pageArr.slice(totalPage - 4, totalPage)];
      }
      return [1, ...pageArr.slice(currentPage - 2, currentPage + 1), totalPage];
    }
    return pageArr;
  };

  const prevPage = () => {
    if (currentPage > 1) {
      onClickPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPage) {
      onClickPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center text-[#909094]">
      <button
        onClick={prevPage}
        className={`flex gap-3 items-center mr-3 ${
          currentPage <= 1 && "cursor-not-allowed"
        }`}
      >
        <ArrowLeftIcon />
        <span>Prev</span>
      </button>

      {pageRange().map((page, index) => (
        <div key={page}>
          {page - pageRange()[index - 1] > 1 && (
            <span className="text-blue-800">&#8230;</span>
          )}
          <button
            onClick={() => onClickPage(page)}
            className={`px-2 mx-1 ${
              currentPage === page && "bg-[#0074E5] text-white rounded"
            }`}
          >
            {page}
          </button>
        </div>
      ))}

      <button
        onClick={nextPage}
        className={`flex gap-3 items-center ml-3 ${
          currentPage >= totalPage && "cursor-not-allowed"
        }`}
      >
        <span>Next</span>
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
