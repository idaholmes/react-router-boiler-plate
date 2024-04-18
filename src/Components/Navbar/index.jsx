import React from "react";
import { NavbarDesktop } from "./Desktop";
import { NavBarMobile } from "./Mobile";

export const NavBar = () => {
  // return both navbars via one component, and only show certain ones depending on viewport size (controled via the CSS in each component itself)
  return (
    <>
      <NavbarDesktop />
      <NavBarMobile />
    </>
  );
};
