export const futbolistasApi = async (nombre) => {
      try {
        const url = `/players/search/${nombre}`;
        const resp = await fetch(url);
        const {results} = await resp.json();
        
        console.log('resultados -> ', results);
        // const futbolista = results.map(resultado => ({
        //     name:resultado.name,
        //     club:resultado.club
        // })); 
  
        return await results;
      } catch (error) {
        console.log('Error en ', error, ' manin');
      }
};

// export const perfilFutbolista = async(id)=>{
//   try {
//     const url2 = `/players/${id}/profile`;
//     const resp = await fetch(url2);
    
//     console.log('resultados -> ', resp);

//     return await resp.json();
//   } catch (error) {
//     console.log('Error en ', error, ' manin');
//   }
// }


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
