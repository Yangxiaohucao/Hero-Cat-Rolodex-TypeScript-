import "./card.style.css";

const Card = ({ hero }) => {
  const { id, name, email } = hero;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`hero ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
