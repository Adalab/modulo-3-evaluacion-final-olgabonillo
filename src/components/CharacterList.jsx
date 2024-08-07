import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  let charactersElements;
  if (characters.length == 0){
    return (
      <section>
        <ul>
        <li className="character-item">
          <p className="not-found">⚠️ No se ha encontrado ningún personaje con la palabra introducida en el buscador</p>
        </li>
        </ul>
      </section>
    ); 
  }else {
   charactersElements = characters.map((character) => {
    return <CharacterCard key={character.id} characterInfo={character} />;
  });
}
  return (
    <section>
      <ul>
        {charactersElements}
      </ul>
    </section>
  );
}

export default CharacterList