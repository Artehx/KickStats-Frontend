import { useEffect, useState } from "react";
import playersflutterService from "../../services/restFlutterService";
import { Button } from "@material-tailwind/react";


function Home () {

    const [players, setPlayers] = useState([]);



    useEffect(() => {
    
     async function recuperarJugadores(nombre) {

        let response = await playersflutterService.getPlayer(nombre);
        console.log('Jugadores recuperados (variable normal) ', response)
        setPlayers(response);

     }

     recuperarJugadores("Ronaldo");

    }, [])

    useEffect(() => {
     
        console.log('Cambia en juagadores -> ', players)

    }, [players])
    
    

return (

    <>

    <div className="flex justify-center bg-white">
    
    <span className="text-4xl">Hola caracola!</span>

    </div>
    
    
    </>
)

}

export default Home;