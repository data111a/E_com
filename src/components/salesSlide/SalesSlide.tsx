import ItemCard from "../itemCard/ItemCard";
import style from "./SalesSlide.module.scss";
import { useState } from "react";
import getRandomNum from "../../utils/getRandomNum";
import img1 from "/images/items/hp1.jpg";
import img2 from "/images/items/hp2.png";
import img3 from "/images/items/hp3.png";
import img4 from "/images/items/hp4.png";
import img5 from "/images/items/hp5.png";
import img6 from "/images/items/hp6.png";
import arrowR from "/images/icons/arrow-right.png";
import arrowL from "/images/icons/arrow-left.png";

const SalesSlide = () => {
  const [items] = useState<string[]>([img1, img2, img3, img4, img5, img6]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIncreace = () => {
    if (currentIndex < items.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDecreace = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <div className={style.tag}></div>
          <div className={style.title_nav}>
            <h1>Flash Sales</h1>
            <div className={style.nav_btns}>
              <button onClick={handleDecreace}>
                <img src={arrowL} alt="arrow-left" />
              </button>
              <button onClick={handleIncreace}>
                <img src={arrowR} alt="arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <div className={style.slider}>
          {items.map((item: string, index: number) => {
            if (index >= currentIndex && index < currentIndex + 4) {
              return <ItemCard img={item} key={index} stars={getRandomNum()} />;
            }
          })}
        </div>
        <button className={style.view_btn}>View All Products</button>
      </div>
      <div className={style.border_div}>
        <div></div>
      </div>
    </>
  );
};

export default SalesSlide;
