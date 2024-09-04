import style from "./Home.module.scss";
import SalesSlide from "../components/salesSlide/SalesSlide.tsx";
import ChooseCategory from "../components/chooseCategory/ChooseCategory";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <SalesSlide />
      <ChooseCategory />
    </div>
  );
};

export default Home;
