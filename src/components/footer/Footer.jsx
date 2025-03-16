import Logo from "../Logo";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <div className="footer__copyright">
        <p className="name">Charles Von der Hejden</p>
        <p className="footer__copyright__text">&copy; 2018 - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
