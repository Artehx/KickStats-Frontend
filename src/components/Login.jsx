
import { useState, useEffect } from 'react'


function Login () {
    
    


    return (
    
    <>
                 <div> {/*DIV PADRE*/}
                  <div class="">
                    <label class="text-xs block mb-2">Email</label>
                    <div class="relative flex items-center">
                      <input name="email" type="text" required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter email" />
                      {/*Icono de carta*/}
                    </div>
                  </div>
                  <div class="mt-10">
                    <label class="text-xs block mb-2">Password</label>
                    <div class="relative flex items-center">
                      <input name="password" type="password" required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter password" />
                      {/*Icono de un ojo*/}
                    </div>
                  </div>
                 
                  <div class="mt-12">
                    <button type="button" class="w-full py-2.5 px-8 text-sm font-semibold rounded bg-yellow-700 hover:bg-yellow-800 text-white border focus:outline-none">
                      Iniciar Sesión
                    </button>
                  </div>
                  </div>
    
    </>
    

  )

}

export default Login;