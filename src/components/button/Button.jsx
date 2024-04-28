import React from "react";

export const Button = (props) => {
  return (
    <button
      {...props}
      className={
        "bg-primary-blue hover:bg-primary-blue/90 text-white py-2 px-6 rounded-full flex gap-2 items-center " +
        (props.className ? props.className : "")
      }
    >
      {props.children}
    </button>
  );
};
