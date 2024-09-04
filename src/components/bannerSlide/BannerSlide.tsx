import style from "./BannerSlide.module.scss";
import Img1 from "/images/banners/apple_banner.jpg";
import Img2 from "/images/banners/iphone_banner.png";
import Img3 from "/images/banners/samsung_banner.jpg";
import { useState } from "react";

const BannerSlide = () => {
  const [index, setIndex] = useState(0.0);
  const [imgs] = useState([Img1, Img2, Img3]);

  return (
    <div className={style.container}>
      {imgs.map((img: string, imgIndex: number) => {
        if (imgIndex === index) return <img src={img} key={index} />;
      })}
      <button onClick={() => setIndex(Math.min(index + 1, 2))}>next</button>
    </div>
  );
};

export default BannerSlide;
