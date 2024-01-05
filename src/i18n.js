import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Rechercher par nom": "Search by name",
      "Toutes les générations": "All generations",
      "Génération": "Generation",
      "Tous les types": "All types",
      "Numéro": "Number",
      "Alphabétique": "Alphabetical",
      "Poids": "Weight",
      "Taille": "Size",
      "Croissant": "Ascending",
      "Décroissant": "Descending",
      "Fermer": "Close",
      "PV": "HP",
      "Attaque" : "Attack",
      "Défense" : "Defense",
      "Vitesse" : "Speed",
      "Attaque spéciale" : "Special attack",
      "Défense spéciale" : "Special defense",
      "Évolutions à partir de ce Pokémon :" : "Evolutions from this Pokemon :",
      "Évolutions de ce Pokémon :" : "Evolutions of this Pokemon :"
    }
  },
  fr: {
    translation: {
      "Rechercher par nom": "Rechercher par nom",
      "Toutes les générations": "Toutes les générations",
      "Génération": "Génération",
      "Tous les types": "Tous les types",
      "Numéro": "Numéro",
      "Alphabétique": "Alphabétique",
      "Poids": "Poids",
      "Taille": "Taille",
      "Croissant": "Croissant",
      "Décroissant": "Décroissant",
      "Fermer": "Fermer",
      "PV": "PV",
      "Attaque" : "Attaque",
      "Défense" : "Défense",
      "Vitesse" : "Vitesse",
      "Attaque spéciale" : "Attaque spéciale",
      "Défense spéciale" : "Défence spéciale",
      "Évolutions à partir de ce Pokémon :" : "Évolutions à partir de ce Pokémon :",
      "Évolutions de ce Pokémon :" : "Évolutions de ce Pokémon :"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;