import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock, faRepeat } from '@fortawesome/free-solid-svg-icons'
import {toast} from 'react-toastify';

function Register({onFormSubmit}) {

        let [formData, setFormData] = useState({
            email: '', password: '', repassword: ''
        })

        const [validationErrors, setValidationErrors] = useState({});


        function fieldValidation(field) {
         let isValid = true;

         const mensajeErrores = { ...validationErrors};

         switch(field) {

            case "email":
             if(!formData.email) {
                mensajeErrores.email = '*Email obligatorio';
                isValid = false;
             } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                mensajeErrores.email = "*El email no es valido";
                isValid = false;
             }
            
            break;

            case "password":
              if(!formData.password) {
                mensajeErrores.password = "*Contraseña obligatoria";
                isValid = false;
              } else if(formData.password.length < 8) {
                mensajeErrores.password = "*La contraseña debe tener al menos 8 caracteres";
              } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{9,}/.test(formData.password)) {
                mensajeErrores.password = "*La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial";
                isValid = false;
              }

            break;

            case "repassword":
             
              if (!formData.repassword) {
                    mensajeErrores.repassword = "*Repite la contraseña...";
                    isValid = false;
                    console.log('Entra en repassword')
                } else if (formData.password !== formData.repassword) {
                    mensajeErrores.repassword = "Las contraseñas no coinciden";
                    isValid = false;
                }
            break;
                
         }
         
 
         return {mensajeErrores, isValid};

        }

        const handleBlur = (ev) => {

            const {name} = ev.target;
            const {mensajeErrores, isValid} = fieldValidation(name);
            setValidationErrors(mensajeErrores);
        }

        const handleChange = (ev) => {
         const {name, value} = ev.target;
         setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
         }))

         validationErrors[name] && delete validationErrors[name];
         setValidationErrors({... validationErrors });

        }

        async function handleSubmit(ev) {
         
            try {

            ev.preventDefault();

            const fieldsComplete = Object.keys(formData).every(field => {
                const {errorMessages, isValid} = fieldValidation(field);
                setValidationErrors(prevErrors => ( {
                    ...prevErrors,
                    ...errorMessages
                }));
                return isValid;
            })

            if(!fieldsComplete) {
              
                toast.warning("Faltan campos por completar...")

            } else {
            
                onFormSubmit(formData);

            }
            
    
                
            } catch (error) {
    
             console.log('Error fatal: ', error)
            }

        }

         return (
                 <>
                  <div> {/*DIV PADRE*/}
                  <div class="">
                    <label class="text-sm block mb-2">Email</label>
                    <div class="relative flex items-center">
                      <input name="email" type="text" onChange={(ev) => handleChange(ev)} onBlur={(ev) => handleBlur(ev)} required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-red-500 px-2 py-3 outline-none" placeholder="Introduce un email" />
                      <FontAwesomeIcon icon={faEnvelope} color="gray"/>
                    </div>
                    {validationErrors.email && (
                     <span className="text-red-500 text-xs m-0 p-0">{validationErrors.email}</span>
                     )} 
                      </div>
                  <div class="mt-4">
                    <label class="text-sm block mb-2">Password</label>
                    <div class="relative flex items-center">
                      <input name="password" type="password" onChange={(ev) => handleChange(ev)} onBlur={(ev) => handleBlur(ev)} required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-red-500 px-2 py-3 outline-none" placeholder="Introduce una contraseña" />
                      <FontAwesomeIcon icon={faLock} color="gray"/>
                    </div>
                    {validationErrors.password && (
                     <span className="text-red-500 text-xs m-0 p-0">{validationErrors.password}</span>
                     )} 
                  </div>
                  <div class="mt-4">
                    <label class="text-sm block mb-2">Repetir contraseña</label>
                    <div class="relative flex items-center">
                      <input name="repassword" type="password" onChange={(ev) => handleChange(ev)} onBlur={(ev) => handleBlur(ev)} required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-red-500 px-2 py-3 outline-none" placeholder="Repite la contraseña" />
                      <FontAwesomeIcon icon={faRepeat} color="gray"/>
                    </div>
                    {validationErrors.repassword && (
                     <span className="text-red-500 text-xs m-0 p-0">{validationErrors.repassword}</span>
                     )} 
                  </div>
                  <div class="flex items-center mt-8">
                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 rounded" />
                    <label for="remember-me" class="ml-3 block text-sm">
                    Acepto los <a class="text-yellow-600 font-semibold hover:underline ml-1">Terminos y condiciones</a>
                    </label>
                  </div>
                  <div class="mt-8">
                    <button type="button" class="w-full py-2.5 px-8 text-sm font-semibold rounded bg-red-500 hover:bg-red-800 text-white border focus:outline-none"
                     onClick={handleSubmit}>
                      Crear una cuenta
                    </button>
                  </div>
                  </div>
                  </>
)


}

export default Register;