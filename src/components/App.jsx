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
  const [filterValue, setfilterValue] = useState("");

  useEffect(() => {
    getCharacters().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handlefilterValue = (valueName) => {
    setfilterValue(valueName);
  };

  const filteredCharacters = characters.filter((character) => {
    return (
      character.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      character.specie.toLowerCase().includes(filterValue.toLowerCase()) 
    )
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
                  onChangeName={handlefilterValue}
                  valueName={filterValue}
                />
                <CharacterList characters={filteredCharacters} filterValue={filterValue} />
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
