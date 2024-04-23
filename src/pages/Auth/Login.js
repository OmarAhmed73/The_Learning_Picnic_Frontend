import React, {useState} from "react"
import "../style/Login.css"
import {  useNavigate } from "react-router-dom";
import axios from 'axios'
import { setAuthUser } from "../../helper/Storage";




const Login = () => {

  const Navigate = useNavigate();
  const [login,setLogin]=useState({
   email:"",
   password : "",
   loading : false,
   err : null,
  });

  const LoginFun = (e)=>{
    e.preventDefault();
    setLogin({...login, loading:true})
    axios.post("http://localhost:4000/users/login",{
      email : login.email,
      password : login.password,
    }).then((resp)=>{
      setLogin({...login, loading: true, err: ""})
      setAuthUser(resp.data);
      if (resp.data.data.role === "ADMIN") {
        Navigate("/registration")
      } else {
        Navigate("/home")
      }

    }).catch((errors) => {
      setLogin({...login, loading: false, err: errors.response.data.msg, });
    });
  };


  return (

    <div class="h-full loginContainer">
      
	<div class="mx-auto">
		<div class="flex justify-center px-6 py-12">
			
			<div class="w-full justify-center xl:w-3/5 lg:w-11/12 flex">
				
				<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg">
              <h3 class="py-4 text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">Sign In</h3>

              
        
   {(login.err!== null)?<div class="p-3 mb-4 text-lg font-semibold text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <p className="text-red-500">Something is wrong</p>
        </div>:""}
              
					<form onSubmit={LoginFun} class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
						<div class="mb-5 md:flex md:justify-between">		
						</div>
						<div class="mb-5">
							<label class="block mb-2 text-base font-bold text-gray-700 dark:text-white text-start" for="email">
                                Email
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                    placeholder="Email" required
                    value = {login.email}
        onChange={(e)=>
        setLogin({...login, email:e.target.value}) }
                            />
						</div>
						<div class="mb-5">
							
								<label class="block mb-2 text-base font-bold text-gray-700 dark:text-white text-start" for="password">
                      Password
                </label>

								<input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                      placeholder="Enter Password"
                    required  
                    value = {login.password}
        onChange={(e)=>
        setLogin({...login, password:e.target.value}) }
                                />

                  
						</div>
						<div class="mb-8 text-center">
							<button
                                class="w-full px-4 py-2 font-bold text-base text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline hover:cursor-pointer"
                    type="submit"
                    disabled={login.loading===true}
                            >
                                Log In
                            </button>
                </div>
                <hr class="mb-5 border-t" />
              </form>
                      </div>
                      
          </div>
          
		</div>
	</div>
</div>
  )
}

export default Login;