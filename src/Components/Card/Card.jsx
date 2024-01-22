import style from "./Card.module.scss";

export default function Card({ rate, activeCard, setId }) {
  const cl = activeCard ? `${style.active}` : null;

  function handleActive() {
    setId(rate.id);
  }

  return (
    <div className={`${style.cardItem} ${cl}`} onClick={handleActive}>
      <div className={style.cardTitle}>{rate.title + " " + rate.value}</div>
      <div className={style.cardPrice}>{rate.value + " " + "руб/мес"}</div>
      <div className={style.cardSpeed}>{rate.speed + " " + "Мбит/сек"}</div>
      <div className={style.description}>{rate.description}</div>
    </div>
  );
}
