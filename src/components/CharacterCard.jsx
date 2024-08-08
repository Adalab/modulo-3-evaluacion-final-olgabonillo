import { Link } from "react-router-dom";

function CharacterCard({ characterInfo }) {
  return (
    <>
      <Link to={`/detail/${characterInfo.id}`}>
        <li className="character-item">
          <div className="info-characters">
            <img src={characterInfo.photo} alt={characterInfo.name} />
            <h3 className="name-characters">{characterInfo.name}</h3>
            <h4 className="name-characters">{characterInfo.specie}</h4>
          </div>
        </li>
      </Link>
    </>
  );
}

export default CharacterCard;
