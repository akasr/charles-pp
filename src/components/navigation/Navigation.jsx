import WorkWithMe from "../WorkWithMe";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo">C</div>
      <ul className="navigation__list"></ul>
      <WorkWithMe />
    </nav>
  );
};

export default Navigation;
