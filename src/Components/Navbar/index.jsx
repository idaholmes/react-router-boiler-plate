import React from "react";
import { NavbarDesktop } from "./Desktop";
import { NavBarMobile } from "./Mobile";

export const NavBar = () => {
  return (
    <>
      <NavbarDesktop />
      <NavBarMobile />
    </>
  );
};
