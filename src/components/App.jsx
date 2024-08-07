import "../styles/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getCharacters from "../services/GetCharactersFromApi";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getCharacters().then((charactersData) => {
      console.log("characters: ", charactersData);
      setCharacters(charactersData);
      console.log("characters: ", characters);
    });
  }, []);

  const handleFilterName = (valueName) => {
    setFilterName(valueName);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const { pathname } = useLocation();
  const detailRouteData = matchPath("/detail/:id", pathname);
  const characterId = detailRouteData !== null ? detailRouteData.params.id : "";
  const selectedCharacter = characters.find(
    (character) => parseInt(character.id) === parseInt(characterId)
  );

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  onChangeName={handleFilterName}
                  valueName={filterName}
                />
                <CharacterList characters={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={<CharacterDetail characterInfo={selectedCharacter} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
