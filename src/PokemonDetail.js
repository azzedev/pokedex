import React, { useState, useEffect } from 'react';
import "./PokemonCard.css";
import Tilt from "react-parallax-tilt";
import backgroundAcier from "./backgrounds/background-acier.svg";
import backgroundCombat from "./backgrounds/background-combat.svg";
import backgroundDragon from "./backgrounds/background-dragon.svg";
import backgroundEau from "./backgrounds/background-eau.svg";
import backgroundElectrik from "./backgrounds/background-electrique.svg";
import backgroundFee from "./backgrounds/background-fée.svg";
import backgroundFeu from "./backgrounds/background-feu.svg";
import backgroundGlace from "./backgrounds/background-glace.svg";
import backgroundInsecte from "./backgrounds/background-insecte.svg";
import backgroundNormal from "./backgrounds/background-normal.svg";
import backgroundPlante from "./backgrounds/background-plante.svg";
import backgroundPoison from "./backgrounds/background-poison.svg";
import backgroundPsy from "./backgrounds/background-psy.svg";
import backgroundRoche from "./backgrounds/background-roche.svg";
import backgroundSol from "./backgrounds/background-sol.svg";
import backgroundSpectre from "./backgrounds/background-spectre.svg";
import backgroundTenebres from "./backgrounds/background-tenebre.svg";
import backgroundVol from "./backgrounds/background-vol.svg";
import backgroundAcier2 from "./backgrounds/background-acier2.svg";
import backgroundCombat2 from "./backgrounds/background-combat2.svg";
import backgroundDragon2 from "./backgrounds/background-dragon2.svg";
import backgroundEau2 from "./backgrounds/background-eau2.svg";
import backgroundElectrik2 from "./backgrounds/background-electrique2.svg";
import backgroundFee2 from "./backgrounds/background-fée2.svg";
import backgroundFeu2 from "./backgrounds/background-feu2.svg";
import backgroundGlace2 from "./backgrounds/background-glace2.svg";
import backgroundInsecte2 from "./backgrounds/background-insecte2.svg";
import backgroundNormal2 from "./backgrounds/background-normal2.svg";
import backgroundPlante2 from "./backgrounds/background-plante2.svg";
import backgroundPoison2 from "./backgrounds/background-poison2.svg";
import backgroundPsy2 from "./backgrounds/background-psy2.svg";
import backgroundRoche2 from "./backgrounds/background-roche2.svg";
import backgroundSol2 from "./backgrounds/background-sol2.svg";
import backgroundSpectre2 from "./backgrounds/background-spectre2.svg";
import backgroundTenebres2 from "./backgrounds/background-tenebre2.svg";
import backgroundVol2 from "./backgrounds/background-vol2.svg";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';







const backgroundMapping = {
  4: backgroundEau,
  1: backgroundAcier,
  2: backgroundCombat,
  3: backgroundDragon,
  5: backgroundElectrik,
  6: backgroundFee,
  7: backgroundFeu,
  8: backgroundGlace,
  9: backgroundInsecte,
  10: backgroundNormal,
  11: backgroundPlante,
  12: backgroundPoison,
  13: backgroundPsy,
  14: backgroundRoche,
  15: backgroundSol,
  16: backgroundSpectre,
  17: backgroundTenebres,
  18: backgroundVol,
};

const backgroundOverlayMapping = {
  4: backgroundEau2,
  1: backgroundAcier2,
  2: backgroundCombat2,
  3: backgroundDragon2,
  5: backgroundElectrik2,
  6: backgroundFee2,
  7: backgroundFeu2,
  8: backgroundGlace2,
  9: backgroundInsecte2,
  10: backgroundNormal2,
  11: backgroundPlante2,
  12: backgroundPoison2,
  13: backgroundPsy2,
  14: backgroundRoche2,
  15: backgroundSol2,
  16: backgroundSpectre2,
  17: backgroundTenebres2,
  18: backgroundVol2,
};


function PokemonCard() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedGeneration, setSelectedGeneration] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedImage, setSelectedImage] = useState('image');
  const [searchText, setSearchText] = useState('');
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');




  useEffect(() => {
    fetch('https://pokedex-api.3rgo.tech/api/pokemon')
      .then(response => response.json())
      .then(json => setData(json['data']))
      .catch(error => console.error(error));

    fetch('https://pokedex-api.3rgo.tech/api/types')
      .then(response => response.json())
      .then(json => setData2(json['data']))
      .catch(error => console.error(error));
  }, []);

  const handleImage = () => {
    setSelectedImage(selectedImage === 'image' ? 'image_shiny' : 'image')
  }

  const openBigCard = (pokemonData) => {
    console.log("Afficher la fiche complète du Pokémon :", pokemonData);
    setSelectedPokemon(pokemonData);
    setShowPopup(true);
  };


  const closePopup = () => {
    setSelectedPokemon(null);
    setShowPopup(false);
  };

  const filterPokemonByName = (pokemon) => {
    return pokemon.name['fr'].toLowerCase().includes(searchText.toLowerCase());
  };

  const getStatLabel = (stat) => {
    const labels = {
      hp: 'PV',
      atk: 'Attaque',
      def: 'Défense',
      vit: 'Vitesse',
      spe_atk: 'Attaque spéciale',
      spe_def: 'Défense spéciale',
    };
    return t(labels[stat]) || stat; // Utiliser le nom original si la correspondance n'est pas trouvée
  };


  return (
    <>
      <LanguageSelector setSelectedLanguage={setSelectedLanguage}></LanguageSelector>
      <div className='filtre'>
        <input
          type="text"
          placeholder={t("Rechercher par nom")}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          value={selectedGeneration}
          onChange={(e) => setSelectedGeneration(e.target.value)}
        >
          <option value="">{t('Toutes les générations')}</option>
          {[...new Set(data.map((pokemon) => pokemon.generation))].map((generation) => (
            <option key={generation} value={generation}>
              {t('Génération')} {generation}
            </option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">{t('Tous les types')}</option>
          {data2.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name[selectedLanguage]}
            </option>
          ))}
        </select>

        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="id">{t('Numéro')}</option>
          <option value="name">{t('Alphabétique')}</option>
          <option value="weight">{t('Poids')}</option>
          <option value="height">{t('Taille')}</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">{t('Croissant')}</option>
          <option value="desc">{t('Décroissant')}</option>
        </select>

      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button onClick={closePopup} className="close-button">{t('Fermer')}</button>
            <div className="pokemon-info">
              <p className="number">{selectedPokemon.id}</p>
              <h2 className="pokemon-name">{selectedPokemon.name[selectedLanguage]}</h2>
            </div>
            <div className="pokemon-image-container">
              <img
                className="pokemon-image"
                src={selectedPokemon[selectedImage]}
                alt={selectedPokemon.name[selectedLanguage]}
                onClick={handleImage}
              />
            </div>
            <div className="stats-container">
              <p>
                {Object.entries(selectedPokemon.stats).map(([stat, val]) => (
                  <span key={stat}> {getStatLabel(stat)} = {val} </span>
                ))}
              </p>
            </div>
            <div className="generation-container">
              <p className="generation">{t('Génération')} {selectedPokemon.generation} </p>
            </div>
            <div className="types-container">
              {data2.map((type) => {
                if (selectedPokemon.types.includes(type.id)) {
                  return (
                    <img key={type.id} className="type-image" src={type.image} alt={type.name[selectedLanguage]} />
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="size-weight-container">
              <p>{t('Taille')} : {selectedPokemon.height}</p>
              <p>{t('Poids')} : {selectedPokemon.weight}</p>
            </div>
          </div>
        </div>
      )}



      {data
        .filter(
          (pokemon) =>
            filterPokemonByName(pokemon) &&
            (!selectedGeneration || pokemon.generation == selectedGeneration) &&
            (!selectedType || pokemon.types.includes(parseInt(selectedType)))
        )
        .sort((a, b) => {
          const aValue = a[sortField];
          const bValue = b[sortField];

          if (sortOrder === 'asc') {
            return aValue < bValue ? -1 : 1;
          } else {
            return aValue > bValue ? -1 : 1;
          }
        })
        .map((pokemon) => (
          <Tilt key={pokemon.number} className="tilt-card">
            <div className="background-container" onClick={() => openBigCard(pokemon)}>
              {
                pokemon.types.length === 1 ? (
                  <img src={backgroundMapping[pokemon.types[0]]} alt="background" className="backgrounds-img" />
                ) : (
                  <>
                    <img src={backgroundMapping[pokemon.types[0]]} alt="background" className="backgrounds-img" />
                    <img src={backgroundOverlayMapping[pokemon.types[1]]} alt="background-overlay" className="backgrounds-img-overlay" />
                  </>
                )
              }

              <div className="pokemon-name-container">
                <p className="pokemon-number">N°{pokemon.id}</p>
                <h2 className="pokemon-name">{pokemon.name[selectedLanguage]}</h2>
              </div>
              <div className="image-container">
                <img className="salameche-img" src={pokemon.image} alt={pokemon.name[selectedLanguage]} ></img>
              </div>
              <div className="bottom-container">
                <p className="gen">{t('Génération')} {pokemon.generation} </p>
              </div>
              <div className='energie-container'>
                {
                  data2.map((type) => {
                    if (pokemon.types.includes(type.id)) {
                      return (
                        <img className="feu-energie" src={type.image} alt={type.name[selectedLanguage]}></img>)
                    } else {
                      return (null)
                    }
                  })
                }
              </div>
            </div>
          </Tilt>
        ))}
    </>
  );
}

export default PokemonCard;
