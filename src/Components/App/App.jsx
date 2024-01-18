import Card from "../Card/Card";
import data from "./data.json";
import style from "./App.module.scss";

const App = () => {
  return (
    <section>
      <h1>Тарифы</h1>
      <div className={style.container}>
        {data.map((rate) => (
          <Card key={rate.id} rate={rate} />
        ))}
      </div>
    </section>
  );
};

export default App;
