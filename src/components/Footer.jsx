import { pageLinks, socialLinks } from "../../data.js";
import Link from "../components/Link";
import SocialLink from "../components/SocialLink";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <>
      <footer className="section__footer">
        <ul className="footer__menu-list">
          {pageLinks.map((link) => {
            return <Link key={link.id} {...link} />;
          })}
        </ul>
        <ul className="footer__menu-icons">
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} {...link} />;
          })}
        </ul>
        <p>
          Copyright &copy; Mark Ho travel tourism company
          <span id="date">{currentYear}</span>
          all right reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
