import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";
import axios from "axios";

const PokeAPIURL = `https://pokeapi.co/api/v2/pokemon?limit=151`;

function App() {
  const [pokemonRes, setPokemonRes] = useState([]);

  const pokeFetch = () => {
    fetch(PokeAPIURL)
      .then((res) => res.json())
      .then((data) => {
        getPokes(data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pokeFetch();
  }, []);

  const getPokes = async (data) => {
    data.map(async (item) => {
      const results = await axios.get(item.url);
      setPokemonRes((state) => {
        state = [...state, results.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  return (
    <main className="bg-[url(https://dl.airtable.com/.exploreCoverImages/5bc96e992eb75b3e452cb011840ae7a4/6cf7e370)]">
      <img
        className="m-auto p-10"
        src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
      />
      <div className="pokedex grid gap-5 grid-cols-3 m-auto max-w-screen-lg">
        <PokeCard PokeData={pokemonRes} />
      </div>
    </main>
  );
}

export default App;
