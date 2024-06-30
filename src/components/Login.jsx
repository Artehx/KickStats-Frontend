
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import {toast} from 'react-toastify';

function Login ({onFormSubmit}) {
  
      let [formLogin,setFormLogin] = useState({
        email:'', password:''
      });

      const [validationsErrors,setValidationErrors] = useState({});

      function fieldValidation(field){
        let isValid = true;
        const mensajeErrores = {...validationsErrors};
        switch(field){
          case "email":
            if(!formLogin.email){
              mensajeErrores.email = '*Email obligatorio';
              isValid = false;
            }else if(!formLogin.password){
              mensajeErrores.password = '*Contraseña obligatoria';
              isValid=false;
            }
        }
        return{mensajeErrores,isValid};
      }

      const handleBlur = (ev) =>{
        const {name} = ev.target;
        const {mensajeErrores,isValid} = fieldValidation(name);
        setValidationErrors(mensajeErrores);
      }

      const handleChange = (ev)=>{
        const {name,value}=ev.target;
        setFormLogin((prevFormLogin)=>({
          ...prevFormLogin,
          [name]:value,
        }))

        validationsErrors[name] && delete validationsErrors[name];
        setValidationErrors({...validationsErrors});
      }

      async function handleSubmit(ev){
        try{
          ev.preventDefault();
          const fieldsComplete = Object.keys(formLogin).every(field=>{
            const {errorMessages,isValid} = fieldValidation(field);
            setValidationErrors(prevErrors=>({
              ...prevErrors,
              ...errorMessages
            }));
            return isValid;
          })

          if(!fieldsComplete){
            toast.warning("Faltan campos por completar...");
          }else{
            onFormSubmit(formLogin);
          }

        }catch(error){
          console.log('Error fatal: ',error);
        }
      }

          return (
                 <>
                 <div> {/*DIV PADRE*/}
                  <div class="">
                    <label class="text-sm block mb-2">Email</label>
                    <div class="relative flex items-center">
                      <input name="email" type="text" onChange={(ev)=> handleChange(ev)} onBlur={(ev)=> handleBlur(ev)} required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-500 px-2 py-3 outline-none" placeholder="Introduce tu email" />
                      <FontAwesomeIcon icon={faEnvelope} color="gray"/>
                    </div>
                    {validationsErrors.email && (
                        <span className="text-red-500 text-xs m-0 p-0">{validationsErrors.email}</span>
                    )}
                  </div>
                  <div class="mt-4">
                    <label class="text-sm block mb-2">Password</label>
                    <div class="relative flex items-center">
                      <input name="password" type="password" onChange={(ev)=> handleChange(ev)} onBlur={(ev)=> handleBlur(ev)} required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-500 px-2 py-3 outline-none" placeholder="Introduce la contraseña" />
                      <FontAwesomeIcon icon={faEye} color="gray"/>
                    </div>
                    {
                      validationsErrors.password &&(
                        <span className="text-red-500 text-xs m-0 p-0">{validationsErrors.password}</span>
                      )
                    }
                  </div>
                 
                  <div class="mt-8">
                    <button type="button" 
                      onClick={handleSubmit}
                      class="w-full py-2.5 px-8 text-sm font-semibold rounded bg-yellow-800 hover:bg-yellow-900 text-white border focus:outline-none">
                      Iniciar Sesión
                    </button>
                  </div>
                  </div>
                  </>
    

  )

}

export default Login;