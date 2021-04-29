import React from "react";
import "./PokeSearchResult.css";

const PokeSearchResult = () => {
  const selectedPokemon = true;
  return (
    <div className="poke-result-card">
      {selectedPokemon ? (
        <div>
          {/* Add Image Here */}
          <p>Name: Pikachu</p>
          <p>Id: some Id</p>
          <p>Height: some height</p>
          <p>weight: some weight</p>
          <p>base exp: 100</p>
        </div>
      ) : (
        <h1>Welcome to the Pokedex</h1>
      )}
    </div>
  );
};

export default PokeSearchResult;
