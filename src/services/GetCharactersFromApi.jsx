const getCharacters = () => {
  return fetch("https://rickandmortyapi.com/documentation/#get-all-characters")
    .then((res) => res.json())
    .then((data) => {
      const parsedCharacters = data.results.map((character) => {
        return {
          photo: character.results.image,
          name: character.results.name,
          specie: character.results.species,
        };
      });
      return parsedCharacters;
    });
};

export default getCharacters;
