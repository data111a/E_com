import style from "./ChooseCategory.module.scss";
import camera from "/images/categories/Category-Camera.svg";
import phone from "/images/categories/Category-CellPhone.svg";
import computer from "/images/categories/Category-Computer.svg";
import headphone from "/images/categories/Category-Headphone.svg";
import gamepad from "/images/categories/Category-Gamepad.svg";
import smartwatch from "/images/categories/Category-SmartWatch.svg";
import CategoryCard from "../itemCard/CategoryCard";
import { useState } from "react";

const ChooseCategory = () => {
  const categories = [
    { src: phone, alt: "Phone" },
    { src: camera, alt: "Camera" },
    { src: computer, alt: "Computer" },
    { src: headphone, alt: "Headphone" },
    { src: gamepad, alt: "Gamepad" },
    { src: smartwatch, alt: "Smartwatch" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <div className={style.tag}></div>
          <h1>Browse by Category</h1>
        </div>
        <div className={style.categories}>
          {categories.map((category) => (
            <CategoryCard
              key={category.alt}
              img={category.src}
              alt={category.alt}
              handleClick={handleClick}
              selected={selectedCategory}
            />
          ))}
        </div>
      </div>
      <div className={style.border_div}>
        <div></div>
      </div>
    </>
  );
};

export default ChooseCategory;
