function CharacterCard({ characterInfo }) {
  return (
    <>
      <li className="character-item">
        <div className="info-characters">
        <img src={characterInfo.photo} alt={characterInfo.name} />
        <h3 className="name-characters">{characterInfo.name}</h3>
        <h4>{characterInfo.specie}</h4>
        </div>
      </li>
    </>
  );
}

export default CharacterCard;
