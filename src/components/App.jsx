import "../styles/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getCharacters from "../services/GetCharactersFromApi";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");

  useEffect(() => {
    getCharacters().then((charactersData) => {
      setCharacters(charactersData);
      console.log(charactersData);
    });
  }, []);

  const handleFilterName = (valueName) => {
    setFilterName(valueName);
  };

  const handleFilterSpecies = (valueSpecies) => {
    setFilterSpecies(valueSpecies);
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return character.species
        .toLowerCase()
        .includes(filterSpecies.toLowerCase());
    });

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
                  onChangeGender={handleFilterSpecies}
                  valueName={filterName}
                  valueGender={filterSpecies}
                />
                <CharacterList characters={filteredCharacters} />
              </>
            }
          />
          <Route path="/detail/:userId" element={<CharacterDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
