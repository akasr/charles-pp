import WorkWithMe from "../WorkWithMe";
import Logo from "../Logo";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <ul className="navigation__list"></ul>
      <WorkWithMe />
    </nav>
  );
};

export default Navigation;
