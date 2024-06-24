import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import ClientFormsLayout from './components/layouts/ClientForms';
import HomeLayout from './components/layouts/HomeLayout';
import Home from './components/portalComponents/Home';

/*
async function futbolistasApiC(name) {
  // Simulación de una llamada a una API
  const response = await fetch(`/players/search/${name}`);
  const data = await response.json();
  const { results } = await data;
  return results;
}*/

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
      element: <HomeLayout />,
      children: [
        { path: 'Home', element: <Home /> },
      ],
    },
    {
      path: '/Auth',
      element: <ClientFormsLayout />,
      children: [
        { path: 'Login', element: <Login /> },
        { path: 'Register', element: <Register/>}
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
