import { useState } from "react";
import Card from "../Card/Card";
import data from "./data.json";
import style from "./App.module.scss";

const App = () => {
  const [id, setId] = useState(0);
  return (
    <section>
      <h1>Тарифы</h1>
      <div className={style.container}>
        {data.map((rate) => (
          <Card
            key={rate.id}
            rate={rate}
            activeCard={rate.id === id}
            setId={setId}
          />
        ))}
      </div>
    </section>
  );
};

export default App;
