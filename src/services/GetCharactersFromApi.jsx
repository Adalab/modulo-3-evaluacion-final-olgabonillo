const getCharacters = () => {
  return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json")
    .then((res) => res.json())
    .then((data) => {
      const parsedCharacters = data.results.map((character) => {
        return {
          photo: character.image,
          name: character.name,
          specie: character.species,
          id: character.id,
        };
      });
      console.log("prueba fetch:", parsedCharacters)
      return parsedCharacters;
    });
};

export default getCharacters;
