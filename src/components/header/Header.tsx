import style from "./Header.module.scss";
import SaleBar from "../saleBanner/SaleBar";
import SearchIcon from "/images/icons/search_btn.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const [activePath, setActivePath] = useState<string>("");
  const [paths] = useState<string[]>([
    "/home",
    "/contact",
    "/about",
    "/signup",
  ]);
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  console.log(activePath);

  return (
    <header className={style.main_container}>
      <SaleBar />
      <div className={style.content}>
        <nav className={style.navigation}>
          {paths?.map((path: string, index: number) => {
            return <HeaderNav path={path} active={activePath} key={index} />;
          })}
        </nav>
        <div className={style.search}>
          <div className={style.input}>
            <input type="text" placeholder="Search" />
            <button>
              <img src={SearchIcon} alt="search" className={style.search_btn} />
            </button>
          </div>
          <div className={style.icons}>
            {/* <img src={Favorite} alt="search" /> */}
            {/* <img src={Cart} alt="cart" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
