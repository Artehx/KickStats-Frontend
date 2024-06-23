import { useEffect, useState } from 'react'
import { futbolistasApi } from './services/restFlutterService'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './components/Login';

async function futbolistasApiC(name) {
  // Simulación de una llamada a una API
  const response = await fetch(`/players/search/${name}`);
  const data = await response.json();
  const { results } = await data;
  return results;
}

function App() {
  const [players, setPlayers] = useState([]);

  /*
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
   
  */

  const routerObjects = createBrowserRouter([
    {
      path: '/',
      children: [
        { path: 'Cliente/Login', element: <Login /> },
      ],
    },
  ]);

  return (
   <>
    <RouterProvider router={routerObjects}/>
   </>
  );
}
export default App;
