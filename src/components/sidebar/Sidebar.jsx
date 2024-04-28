import React from "react";
import { Menu } from "../menu/Menu";
import { Logo } from "../../assets";

export const Sidebar = () => {
  return (
    <div
      className={` flex-col bg-primary-gray-light px-8 h-screen min-w-[16rem] hidden md:flex`}
    >
      <img className="p-4" src={Logo} alt="Logo" />
      <Menu />
    </div>
  );
};
