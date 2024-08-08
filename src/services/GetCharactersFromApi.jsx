const getCharacters = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      const parsedCharacters = data.results.map((character) => {
        return {
          photo: character.image,
          name: character.name,
          specie: character.species,
          id: character.id,
          originPlanet: character.origin.name,
          episode: character.episode.length,
          status: character.status,
        };
      });
      return parsedCharacters;
    });
};

export default getCharacters;
