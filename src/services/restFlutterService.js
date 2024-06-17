export const futbolistasApi = (nombre) => {
    const getFutbolista = async () => {
      try {
        const url = `/players/search/${nombre}`;
        const resp = await fetch(url);
        const {results} = await resp.json();
        
        console.log('resultados -> ', results);
        // const futbolista = results.map(resultado => ({
        //     name:resultado.name,
        //     club:resultado.club
        // }));

        console.log('hola: ',futbolista);
       
  
        return await resp.json();
      } catch (error) {
        console.log('Error en ', error, ' manin');
      }
    };
    getFutbolista();
  };


  /*
let playersflutterService = {

    getPlayer: async function(nombre) {
        try {
            
            var _pet = await fetch(`https://transfermarkt-api.fly.dev/players/search/${nombre}`)
            
              

        } catch (error) {
            
        }
    }
}
*/
