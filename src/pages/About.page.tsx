import AchiveCard from "../components/itemCard/AchiveCard";
import style from "./About.module.scss";
import aboutImage from "/images/banners/about-image.png";
import gross from "/images/icons/gross.svg";
import sale from "/images/icons/sales.svg";
import customers from "/images/icons/customers.svg";
import sallers from "/images/icons/sallers.svg";
import { useEffect } from "react";

const About = () => {
  const achiveData = [
    {
      src: sallers,
      title: "10.5K",
      details: "Sellers achive out site",
    },
    {
      active: true,
      src: sale,
      title: "33K",
      details: "Monthly Product sale",
    },
    {
      src: customers,
      title: "45.5K",
      details: "Customer active in out site",
    },
    {
      src: gross,
      title: "25K",
      details: "Annual gross sale",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.story_container}>
        <div className={style.story_content}>
          {/* <div> */}
          <h1>Our Story</h1>
          {/* </div> */}
          <div>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div>
          <img src={aboutImage} alt="about-image" />
        </div>
      </div>
      <div className={style.achive_container}>
        {achiveData.map((item) => (
          <AchiveCard
            key={item.title}
            src={item.src}
            title={item.title}
            details={item.details}
            active={item?.active}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
