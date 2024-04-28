import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { MdClose, MdMenu } from "react-icons/md";
import { TextButton } from "../button/TextButton";
import { Logo } from "../../assets";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="md:hidden ">
      <div className="navbar bg-primary-gray-light relative flex gap-2 py-2">
        <TextButton onClick={showSidebar}>
          <MdMenu fontSize={24} />
        </TextButton>
        <img className="h-[2rem] w-auto" src={Logo} alt="Logo" />
      </div>
      <nav
        className={
          (sidebar ? "left-0" : "-left-[100%]") +
          " bg-primary-gray-light top-0 absolute px-12 h-screen flex flex-col min-w-[20rem] transition-all duration-300 z-[100]"
        }
      >
        <TextButton className="self-start mt-2" onClick={showSidebar}>
          <MdClose />
        </TextButton>
        <Menu />
      </nav>
    </div>
  );
};
