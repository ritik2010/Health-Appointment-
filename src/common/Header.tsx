import React from "react";
import projectLogo from "../Logo/projectLogo.png";
import NavLinkButton from "./NavLinkButton";
import { HeaderLinkType } from "./commonType";

const Header: React.FC<{ headerLink: HeaderLinkType[] }> = ({ headerLink }) => {
  const headerLinkNav = headerLink.map((link) => {
  return(
    <li key={link.btName}>
    <NavLinkButton
     btPath={link.btPath}
     btName={link.btName}
     btType={link.btType}
   />;
  </li>
  )
  });

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-amber-200">
      <div className="flex items-center">
        <img
          src={projectLogo} // Replace with your logo image path
          alt="Logo"
          className="h-8 mr-4"
        />
        <h1 className="text-xl font-bold">Header</h1>
      </div>
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          {headerLinkNav}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
