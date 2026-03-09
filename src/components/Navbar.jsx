import { useState } from "react";
import logo from "../assets/logo.png";
import Link from "../components/Link";
import SocialLink from "./SocialLink";
import { pageLinks, socialLinks } from "../../data.js";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container navbar-flex">
          <a href="#home" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="main-menu">
            <ul className="main-menu-list">
              {pageLinks.map((link) => {
                return <Link key={link.id} {...link} />;
              })}
            </ul>
            <ul className="main-menu-icons">
              {socialLinks.map((link) => {
                return <SocialLink key={link.id} {...link} />;
              })}
            </ul>
          </div>
          <div className="mobile-menu">
            <div className="mobile-menu-toggle" onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className={`mobile-menu-items ${isOpen ? "active" : ""}`}>
              <ul className="mobile-menu-list">
                {pageLinks.map((link) => {
                  return <Link key={link.id} callback={toggleMenu} {...link} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
