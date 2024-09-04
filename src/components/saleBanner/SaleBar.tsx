import style from "./SaleBar.module.scss";
import Arrow from "/images/icons/arrow-down-grey.png";

const SaleBar = () => {
  return (
    <div className={style.container}>
      <div className={style.text_content}>
        <p>
          Summer Sale For All Swim Suits And Free Express Devlivery - OFF 50%{" "}
          <span>
            <b>SHOP NOW</b>
          </span>
        </p>
      </div>
      <div className={style.change_lang}>
        <p>English</p>
        <img src={Arrow} alt="arrow-down" />
      </div>
    </div>
  );
};

export default SaleBar;
