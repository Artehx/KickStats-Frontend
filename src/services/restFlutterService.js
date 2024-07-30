
/*
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
};*/


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



let restflutterService = {

    register: async function(email, password) {

      try {
       
        var _pet = await fetch(`http://127.0.0.1:5000/registerClient`,
          {
          method: 'POST',
          body: JSON.stringify({email: email, password: password}),
          headers: {'Content-Type':'application/json'}
          }
        )

        return await _pet.json();
      
      } catch (error) {

        console.log(`Algo ha ido mal: ${error}`);
          return [];
      }


    },
    login: async function(email,password) {

      try {
       
        var _pet = await fetch(`http://127.0.0.1:5000/loginClient`,
          { method:'POST',
            body:JSON.stringify({email: email,password: password}),
            headers:{'Content-Type':'application/json'}
          }
        );
        return await _pet.json();

      } catch (error) {

        console.log(`Algo ha ido mal: ${error}`);
          return [];
      }


    },

    getPlayer: async function(nombre) {
        try {
            
            var _pet = await fetch(`http://127.0.0.1:5000/buscarJugador?player_name=${nombre}`)
            return await _pet.json();

        } catch (error) {
            
          console.log(`Algo ha ido mal: ${error}`);
          return [];
        }
    }
}

export default restflutterService;

