import React from "react";
import { useParams } from "react-router-dom";

function CharacterDetail({ characterInfo }) {

  return (
    <>
      <section>
        <div className="detail-card">
          <img src={characterInfo.photo} alt={characterInfo.name} />
          <h3 className="name-characters">{characterInfo.name}</h3>
          <p>{characterInfo.specie}</p>
          <p>{characterInfo.originPlanet}</p>
          <p>{characterInfo.episode}</p>
        </div>
      </section>
    </>
  );
}

export default CharacterDetail;
