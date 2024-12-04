import React from "react";

const Button = ({ title, id, leftIcon, rightIcon, classContainer }) => {
  return (
    <button
      id={id}
      className={` group text-sm w-fit cursor-pointer overflow-hidden px-5 py-2 sm:px-7 sm:py-4 ${classContainer}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general uppercase text-xs">{title}</span>

      {rightIcon}
    </button>
  );
};

export default Button;
