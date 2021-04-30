import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css";

const PokeList = () => {
  return (
    <div className="pokelist">
      <PokeCard name="pikachu" />
      <PokeCard name="pikachu1" />
      <PokeCard name="pikachu2" />
      <PokeCard name="pikachu3" />
      <PokeCard name="pikachu4" />
      <PokeCard name="pikachu5" />
      <PokeCard name="pikachu6" />
    </div>
  );
};

export default PokeList;
