import React from "react";

export const TextButton = (props) => {
  return (
    <button
      {...props}
      className={
        "text-primary-blue hover:bg-primary-gray py-2 px-6 rounded-full flex gap-2 items-center " +
        (props.className ? props.className : "")
      }
    >
      {props.children}
    </button>
  );
};
