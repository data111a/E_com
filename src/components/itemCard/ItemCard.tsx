import starsGen from "../../utils/starsGen";
import style from "./ItemCard.module.scss";

const ItemCard = ({ img, stars }: { img: string; stars: number }) => {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={img} alt="image" />
      </div>
      <div className={style.details}>
        <p>Gaming Headphones</p>
        <p>$120</p>
        {starsGen(stars)}
      </div>
    </div>
  );
};

export default ItemCard;
