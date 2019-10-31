import React, { useState, useEffect } from 'react';

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const whatchId = navigator.geolocation.watchPosition(
      handlePositionReceived
    );

    // WillAmount
    return () => navigator.geolocation.clearWatch(whatchId);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }

  return (
    <>
      <p>
        Latitude: <b>{location.latitude}</b>
      </p>
      <p>
        Longitude: <b>{location.longitude}</b>
      </p>
    </>
  );
}

// Exemplo de Repositórios com Hooks

// const [repositories, setRepositories] = useState([]);

//   useEffect(async () => {
//     const response = await fetch('https://api.github.com/users/diego3g/repos');

//     const data = await response.json();
//     setRepositories(data);
//   }, []);

//   useEffect(() => {
//     const filtered = repositories.filter(repo => repo.favorite);

//     document.title = `Você tem ${filtered.length} favoritos`;
//   }, [repositories]);

//   function handleFavorite(id) {
//     const newRepositories = repositories.map(repo => {
//       return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
//     });

//     setRepositories(newRepositories);
//   }

//   return (
//     <ul>
//       {repositories.map(repo => (
//         <li key={repo.id}>
//           {repo.name}
//           {repo.favorite && <span>(Favorito)</span>}
//           <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
//         </li>
//       ))}
//     </ul>
//   );
