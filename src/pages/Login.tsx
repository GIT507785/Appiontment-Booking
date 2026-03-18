import  { useState } from "react"
import { toast } from "react-toastify"
import { loginUser, registeruser } from "../api/user"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  
  const [state , setState] = useState<'Sign Up' | 'Login'>('Sign Up')
 
  
   const navigate = useNavigate()

  const [name , setName] = useState<string>('')
  const [email , setEmail] =  useState<string>('')
  const [password , setPassword] = useState<string>('')
  
   
   const onSubmitHandler = async (e: any) =>{
    e.preventDefault();
    try {
      
       const {data} : any= await loginUser(email , password)
       if(data.success){
        toast.success('Login Successfylly')
        localStorage.setItem('token' , data.token)
        navigate('/')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
     console.log(error)
    }

   }
     


  return (
    <div className="flex items-center justify-center  my-8">
       <form onSubmit={onSubmitHandler} className="min:h-[80vh] w-100  border rounded-md px-6 py-6">
          
          <p className="text-xl font-bold text-gray-600">Login</p>
            

            <div className="mt-2">
              <p className="text-gray-600 text-[16px]">Email </p>
              <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className=" w-full px-2 py-2 mt-1 rounded border border-gray-400 outline-none"/>
            </div>


            <div className="mt-2">
              <p className="text-gray-600 text-[16px]">password</p>
              <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} className="px-2 w-full text-start py-2 mt-1 rounded border border-gray-400 outline-none"/>
            </div>

          <button className="px-8 py-2 mt-2 w-full  bg-blue-500 text-white cursor-pointer rounded "> 
          Login </button>
            
         
          
          <p className="mt-2 text-gray-600 ">Create new account?<Link to='/sign-up ' className="text-blue-500 cursor-pointer underline">Sign Up</Link> </p>         


       </form>
    </div>
  )
}

export default Login