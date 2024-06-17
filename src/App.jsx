import { useEffect, useState } from 'react'
import { futbolistasApi } from './services/restFlutterService'
import './App.css'

async function futbolistasApiC(name) {
  // Simulación de una llamada a una API
  const response = await fetch(`/players/search/${name}`);
  const data = await response.json();
  const { results } = await data;
  return results;
}



function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers(name) {
      try {
        // Asegúrate de usar await aquí
        let data = await futbolistasApi(name);
        console.log('Información recuperada: ', data);
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    }
    getPlayers("Ronaldo");
  }, []);

  useEffect(() => {
    console.log('Componente App: ', players);
  }, [players]);

  return (
    <>
      <h1>Hola</h1>
      <ul>
        {players.length === 0 ? (
          <p>Cargando...</p>) : 
          (players.length > 0 ? (
            <ul>
              {players.map((player) => (
                <li key={player.id}>
                  <div>
                    <p>{player.name}</p>
                    <p>{player.age}</p> 
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron jugadores</p>
          )
        )}
      </ul>
    </>
  );
}
export default App
