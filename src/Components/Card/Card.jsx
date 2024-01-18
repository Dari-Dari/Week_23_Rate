import style from "./Card.module.scss";

const Card = ({ rate }) => {
  console.log(rate)
  return (
    <div className={`${style.cardItem} ${rate.selected === "active" ? style.selected : ""}`}> 
      <div className={style.cardTitle}>{rate.title + " " + rate.value}</div>
      <div className={style.cardPrice}>{rate.value + " " + "руб/мес"}</div>
      <div className={style.cardSpeed}>{rate.speed + " " + "Мбит/сек"}</div>
      <div className={style.description}>{rate.description}</div>
    </div>
  );

  
};

export default Card;
