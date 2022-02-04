import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    <a key={links} href={"#home"}>home</a>
    <a href={"#about"}>about</a>
    <a href={"#projects"}>projects</a>
  </nav>
  )}

export default NavBar;
