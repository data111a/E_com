import star from "/images/icons/star.svg";

const starsGen = (num: number) => {
  return (
    <div>
      {Array.from({ length: num }, (_, index) => (
        <img key={index} src={star} />
      ))}
    </div>
  );
};

export default starsGen;
