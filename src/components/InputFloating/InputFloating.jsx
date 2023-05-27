import React from "react";

/* eslint-disable react/prop-types */
const InputFloating = ({
  id,
  type,
  name,
  value,
  label,
  placeholder,
  onChange,
  onBlur,
  isError,
  className,
}) => {
  return (
    <div className="relative">
      <input
        className={`w-full h-14 p-4 rounded block border border-gray-400 focus:outline-[#74777F] placeholder-transparent peer ${
          isError && "border-red-500 focus:outline-red-500"
        } ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      <label
        htmlFor={id}
        className={`absolute px-1 transition-all bg-white text-sm text-gray-400 left-3 -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:-top-3 peer-focus:text-slate-600  ${
          isError &&
          "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputFloating;
