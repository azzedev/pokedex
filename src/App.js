import "./App.css";
import Header from "./Header.js";
import PokemonCard from "./PokemonCard.js";
import "./fonts/pokemon/PokemonHollow.ttf";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <div className="App">
      <Header />
      {}
      <div className="PokemonCardContainter">
        <PokemonCard />
      </div>
    </div>
    </I18nextProvider>
  );
}

export default App;
