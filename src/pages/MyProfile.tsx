import { useState } from "react"
import assets from "../assets/assets/assets"

const MyProfile = () => {

   const [userData , setuserData] = useState({
    name:"Haseeb",
    image:assets.profile_pic,
    email:"hafizhaseeb4480gmail.com",
    phone:"+92 000 000 0000",
    address:{
      line1:'57th cross, Richmond',
      line2:'Circle, Church Road , London'
    },
    gender:'Male',
    Birthday:'20 May, 2024'
   })

     const [isEdit , setIsEdit] = useState(false)

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
          <img src={userData.image} alt=""  className="mt-4 w-40 rounded" />

         {isEdit ?
         <input type="text"  className="bg-gray-50  text-3xl font-medium max-w-60 mt-4"   value={userData.name} onChange={(e)=> setuserData(prev => ({...prev, name:e.target.value}))}/>
         :
         <p className="text-black mt-2 text-2xl font-bold">{userData.name}</p>
        }
        
        <hr className="sm:w-md w-30 mt-2 text-gray-400"/>

          <h3 className="underline text-gray-500 font-sans mt-4">CONTACT INFORMATION</h3>

          <div className="flex gap-4 mt-4">
            <h5 className="mt-2 text-gray-600"> Email Id:</h5>
            {isEdit ? 
            <input type="email"  value={userData.email}  onChange={(e)=>setuserData(prev=>({...prev,email:e.target.value}))}/>
            :
            <p className="text-blue-500 mt-2">{userData.email}</p>  
          }
          </div> 
          

           <div className="flex gap-4 mt-4">
            <h5 className="mt-2 text-gray-600">Phone:</h5>

             {isEdit ? 
             <input type="phone" value={userData.phone} onChange={(e)=>setuserData(prev => ({...prev ,phone:e.target.value}))} /> 
             :
             <p className="text-blue-500 mt-2">{userData.phone}</p> 
            }
           </div>
              

              <div className="flex gap-4 mt-4">
            <h5 className="mt-2 text-gray-600">Address:</h5>

             {isEdit ? 
              <p>
                <input type="text" onChange={(e)=>setuserData(prev =>({...prev, address: {... prev.address , line1:e.target.value}}))}  value={userData.address.line1}/>
                <br />
                <input type="text" onChange={(e)=>setuserData(prev => ({...prev, address:{ ...prev.address, address:e.target.value}}))} value={userData.address.line2}/>
              </p>
             :
             <p className="text-blue-500  ">{userData.address.line1}
               <br />
               {userData.address.line2}
             </p> 
            }
           </div>   

          <h3 className="underline text-gray-500 font-sans mt-4">BASIC INFORMATION</h3>

          <div className="flex gap-4 mt-4">
             
            <h5 className="mt-2 text-gray-600">Gender:</h5>
            
             { isEdit
              ?   <select  onChange={(e)=>setuserData(prev => ({...prev, gender:e.target.value}))} value={userData.gender}>
               
               <option value="Male">Male</option>
               <option value="Female" >Female</option>
             </select>
             :
             <p className="text-blue-500 mt-2">{userData.gender}</p>

             }
            </div>   

             <div className="flex gap-4 mt-4">
            <h5 className="mt-2 text-gray-600">Birthday:</h5>
            {isEdit ? 
            <input type="date"   value={userData.Birthday}  onChange={(e)=>setuserData(prev=>({...prev,Birthday:e.target.value}))}/>
            :
            <p className="text-blue-500 mt-2">{userData.Birthday}</p>  
          }
          </div> 

          <div className="mt-5 ">
            {isEdit ? 
             <button className="px-8   py-2 cursor-pointer rounded-full border border-blue-500" onClick={()=>setIsEdit(false)}>Save  information</button>
             :
             <button className="px-8   py-2 cursor-pointer rounded-full border border-blue-500" onClick={()=>setIsEdit(true)}>Edit</button>  
            }
          </div> 
            

    </div>
  )
}

export default MyProfile