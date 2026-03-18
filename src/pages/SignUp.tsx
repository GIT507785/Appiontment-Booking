import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registeruser } from "../api/user"
import { toast } from "react-toastify"

const SignUp = () => {

    const [name , setName] = useState('')
    const [email ,setEmail] = useState('')
    const [password , setPassword] = useState('')


     const navigate = useNavigate()

 const onSubmitHanlder = async (e: React.FormEvent) =>{
        e.preventDefault()

     try {
        
         const {data}:any = await  registeruser(name , email, password)
         if(data.success){
          toast.success('SignUp successfully') 
          navigate('/')
         } else {
            toast.error(data.message)
         }

     } catch (error) {
        console.log(error)
     }


 }

  return (
    <form onSubmit={onSubmitHanlder} className="  border    px-6 py-6 rounded-md w-80 mx-auto mt-10">
        <div >
            <h1 className="text-2xl font-bold text-gray-500">Sign Up</h1>

            <div>
              <h1 className="text-gray-600 text-md">Name</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" 
             className="border mt-2 border-gray-300 p-2 w-full outline-none" placeholder="Enter your name"/>
            </div>

            <div className="mt-2">
              <h1 className="text-gray-600 text-md">Email</h1>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="border mt-2 border-gray-300 p-2 w-full outline-none" placeholder="email"/>
            </div>


            <div className="mt-2">
              <h1 className="text-gray-600 text-md">password</h1>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="border mt-2 border-gray-300 p-2 w-full outline-none" placeholder="password"/>
            </div>

             <button  className="bg-blue-600 text-white px-4 py-1 rounded-full w-full mt-2 cursor-pointer hover:bg-blue-500">Sign Up</button>
                
              <p className="text-gray-500 mt-2">Already have an account? <Link className="text-blue-500" to={'/login'}>Login</Link></p>  

        </div>
    </form>
  )
}

export default SignUp