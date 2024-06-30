import { Fragment, useState } from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import Login from "../Login";
import Register from "../Register";
import restflutterService from "../../services/restFlutterService";

function ClientForms () {

  let [currentForm, setCurrentForm] = useState('register');

  

  const handleFormChange = (form) => {
     setCurrentForm(form);
    
     
  }

  const handleFormSubmit = (formType, data) => {

    console.log(`Datos del formulario ${formType}:`, data);

    if(formType == 'register'){
    
     let response = restflutterService.register(formType)

     console.log('Respuesta del servidor: ', response);

    } else {


    }


  }
  

  return (

       
       <div className="w-full h-full ">
        {/* <div className="flex justify-center">
        <span className="text-white text-3xl font-extrabold">ESTE ES EL CLIENT FORM LAYOUT</span>
         </div>
         
             <img src="/images/kickStatsLogo.png" alt="logo" class='w-52 mx-auto' />
         */ }

         <div className="flex justify-center bg-black">
           <img src="/images/kickStatsLogo.png" alt="logo" class='w-32' />

         </div>

         <div class="font-[sans-serif] bg-white text-[#333] pb-4">
            <div class="grid md:grid-cols-2 items-center mx-10 mt-5 h-full">
              <div class="bg-gray-50 ">
                <img src="/images/stadium.jpeg" class="w-full h-full object-cover rounded-xl" alt="login-image" />
              </div>
              
              <div class="flex flex-col items-center pt-3.5 h-full w-full gap-y-4">
                  <div class="flex justify-center w-9/12">
                  <ButtonGroup fullWidth>
                  <Button className={`text-base ${currentForm === 'register' ? 'bg-red-500' : 'bg-gray-500'}`} onClick={() => handleFormChange('register')}>Registro</Button>
                  <Button className={`text-base ${currentForm === 'login' ? 'bg-yellow-800' : 'bg-gray-500'}`} onClick={() => handleFormChange('login')}>Login</Button>
                   
                </ButtonGroup>
                  </div>
                
                 <div class="max-w-lg w-full ">
                 {currentForm === 'register' ? <Register onFormSubmit={(data) => handleFormSubmit('register', data)}/> 
                                             : 
                                               <Login onFormSubmit={(data) => handleFormSubmit('login', data)}/>}
                  
                </div>
              </div>
            </div>
          </div>
           


          
       </div>

    
    
  )

}

export default ClientForms;