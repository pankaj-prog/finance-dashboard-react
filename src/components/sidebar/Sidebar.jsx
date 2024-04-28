import React from "react";
import { Menu } from "../menu/Menu";
import { Logo } from "../../assets";

export const Sidebar = () => {
  return (
    <div
      className={` flex-col bg-primary-gray-light px-12 h-screen min-w-[20rem] hidden md:flex`}
    >
      <img className="p-4 pt-8" src={Logo} alt="Logo" />
      <Menu />
    </div>
  );
};
