import "../styles/App.scss";
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="main"></main>
    </>
  );
}

export default App;
