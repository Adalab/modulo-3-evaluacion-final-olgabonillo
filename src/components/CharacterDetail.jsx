import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CharacterDetail({ characterInfo }) {
  return (
    <>
      <section>
        <Link className="link-home" to="/">⬅Volver al inicio</Link>
        <div className="detail-card">
          <img src={characterInfo.photo} alt={characterInfo.name} />
          <h3 className="name-characters">{characterInfo.name}</h3>
          
          <p>Estado: {characterInfo.status}</p>
          <p>Tipo de especie: {characterInfo.specie}</p>
          <p>Planeta de origen: {characterInfo.originPlanet}</p>
          <p>Número de episodios: {characterInfo.episode}</p>
        </div>
      </section>
    </>
  );
}

export default CharacterDetail;
