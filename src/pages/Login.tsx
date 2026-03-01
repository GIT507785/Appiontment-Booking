import React, { useState } from "react"

const Login = () => {
  
  const [state , setState] = useState<'Sign Up' | 'Login'>('Sign Up')
 
  
   

  const [name , setName] = useState<string>('')
  const [email , setEmail] =  useState<string>('')
  const [password , setPassword] = useState<string>('')
  
   
   const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

   }



  return (
    <div className="flex items-center justify-center  my-8">
       <form onSubmit={onSubmitHandler} className="min:h-[80vh] w-100  border rounded-md px-6 py-6">
          
          <p className="text-xl font-bold text-gray-600">{state === 'Sign Up' ? 'Create account' : 'Login '}</p>
          <p className="text-md text-gray-600 py-2 ">{state === 'Sign Up' ? 'please sign up to book appiontment' : 'Login  to book appiontment'}</p>

             {state === 'Sign Up' &&
            <div className="mt-2">
              <p className="text-gray-600 text-[16px]">Full Name</p>
              <input onChange={(e)=>setName(e.target.value)}  type="text" className="px-2 w-full py-2 mt-1 rounded border border-gray-400 outline-none"/>
            </div>
            }

            <div className="mt-2">
              <p className="text-gray-600 text-[16px]">Email </p>
              <input type="text" onChange={(e)=>setEmail(e.target.value)} className=" w-full px-2 py-2 mt-1 rounded border border-gray-400 outline-none"/>
            </div>


            <div className="mt-2">
              <p className="text-gray-600 text-[16px]">password</p>
              <input type="text" onChange={(e)=>setPassword(e.target.value)} className="px-2 w-full text-start py-2 mt-1 rounded border border-gray-400 outline-none"/>
            </div>

          <button className="px-8 py-2 mt-2 w-full  bg-blue-500 text-white cursor-pointer rounded ">{state === 'Sign Up' ? 'Create account' : 'Login '}</button>
            
            {state === 'Sign Up' ?
          <p className="mt-2 text-gray-600 ">Already have an account?<span onClick={()=>setState('Login')} className="text-blue-500 cursor-pointer underline">Login here</span> </p>         
          :
          <p className="mt-2 text-gray-600 ">Create new account?<span onClick={()=>setState('Sign Up')} className="text-blue-500 cursor-pointer underline">Sign Up</span> </p>         

            }


       </form>
    </div>
  )
}

export default Login