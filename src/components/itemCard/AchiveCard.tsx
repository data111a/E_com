import style from "./AchiveCard.module.scss";

const AchiveCard = ({
  src,
  title,
  details,
  active,
}: {
  src: string;
  title: string;
  details: string;
  active: boolean | undefined;
}) => {
  return (
    <div className={`${style.container} ${active ? style.active : ""}`}>
      <img src={src} alt="gross" />
      <h1>{title}</h1>
      <p>{details}</p>
    </div>
  );
};

export default AchiveCard;
