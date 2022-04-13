import "./card-list.style.css";
import Card from "../card/card.component";
import { Hero } from "../../App";

type CardListProps = {
  heros: Hero[];
};
const CardList = ({ heros }: CardListProps) => (
  <div className="card-list">
    {heros.map((hero) => {
      return <Card hero={hero} key={hero.id} />;
    })}
  </div>
);

export default CardList;
