

function Register() {

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
                  <div class="mt-6">
                    <label class="text-xs block mb-2">Password</label>
                    <div class="relative flex items-center">
                      <input name="password" type="password" required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter password" />
                      {/*Icono de un ojo*/}
                    </div>
                  </div>
                  <div class="mt-6">
                    <label class="text-xs block mb-2">Repetir password</label>
                    <div class="relative flex items-center">
                      <input name="password" type="password" required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter password" />
                      
                    </div>
                  </div>
                  <div class="flex items-center mt-8">
                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 rounded" />
                    <label for="remember-me" class="ml-3 block text-sm">
                    Acepto los <a href="javascript:void(0);" class="text-yellow-600 font-semibold hover:underline ml-1">Terminos y condiciones</a>
                    </label>
                  </div>
                  <div class="mt-12">
                    <button type="button" class="w-full py-2.5 px-8 text-sm font-semibold rounded bg-red-500 hover:bg-red-800 text-white border focus:outline-none">
                      Crear una cuenta
                    </button>
                  </div>
                  </div>
    
    
    </>
)


}

export default Register;