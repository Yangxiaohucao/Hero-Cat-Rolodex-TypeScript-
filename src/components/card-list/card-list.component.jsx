import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = ({ heros }) => (
  <div className="card-list">
    {heros.map((hero) => {
      return <Card hero={hero} key={hero.id} />;
    })}
  </div>
);

export default CardList;
