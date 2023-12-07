import "./App.css";
import Header from "./Header.js";
import PokemonCard from "./PokemonCard";
import "./fonts/pokemon/PokemonHollow.ttf";

function App() {
  return (
    <div className="App">
      <Header />
      {}
      <div className="PokemonCardContainter">
        <PokemonCard />
      </div>
    </div>
  );
}

export default App;
