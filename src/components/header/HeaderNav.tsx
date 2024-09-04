import style from "./HeaderNav.module.scss";
import { NavLink } from "react-router-dom";

const HeaderNav = ({ path, active }: { path: string; active: string }) => {
  console.log(path, active);
  return (
    <NavLink
      to={`${path}`}
      className={`${active === path ? style.active : ""}`}
    >
      {path.slice(1)}
    </NavLink>
  );
};

export default HeaderNav;
