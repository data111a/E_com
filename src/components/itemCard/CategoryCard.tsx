import styles from "./CategoryCard.module.scss";

const CategoryCard = ({
  img,
  alt,
  handleClick,
  selected,
}: {
  img: string;
  alt: string;
  handleClick: (category: string) => void;
  selected: string;
}) => {
  return (
    <div
      className={`${styles.card} ${selected === alt && styles.activeCard}`}
      onClick={() => handleClick(alt)}
    >
      <img src={img} alt={alt} />
      {/* {img} */}
      <p>{alt}</p>
    </div>
  );
};

export default CategoryCard;
