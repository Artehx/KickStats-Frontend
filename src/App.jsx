import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { futbolistasApi } from './services/restFlutterService'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [player, setPlayer] = useState([]);


  useEffect(() => {

    async function getPlayer(name) {

      let data = await futbolistasApi(name)
      setPlayer(data);
    }

    getPlayer("Ronaldo");

  }, [])


  useEffect(() => {
   console.log(player);
  }, [player])




  return (
    <>
    <h1>Hola caracola</h1>


    </>
  )
}

export default App
