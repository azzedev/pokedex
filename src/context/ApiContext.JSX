// import React, { createContext, useState, useEffect } from 'react';

// export const ApiContext = createContext();

// export const ApiProvider = ({ children }) => {
//     const [pokemons, setPokemons] = useState([]);
//     const [types, setTypes] = useState([]);

//     useEffect(() => {
//         fetch('https://pokedex-api.3rgo.tech/api/pokemon')
//         .then(response => response.json())
//         .then(json => setPokemons(json['data']))
//         .catch(error => console.log(error));
//     }, []);

//     return (
//         <ApiContext.Provider value={{ pokemons, types }}>
//       {children}
//     </ApiContext.Provider>
//   );
// };