import "./PokeCard.css";

const PokeCard = (props: any) => {
  return (
    <div className="pokecard">
      {/* {to add image} */}
      <p>{props.name}</p>
    </div>
  );
};

export default PokeCard;
