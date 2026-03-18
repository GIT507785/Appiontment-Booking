import { Link, useNavigate } from "react-router-dom"
// import { doctors } from "../assets/assets/assets"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"


interface doctor {
  name:string
 speciality:string
 image:string
 _id:string 
}

const TopDoctors = () => {

   const navigate = useNavigate()
   
   const [doctors , setDoctors] = useState<doctor[]>([])
    
   const fetchDoctors = async () =>{
   
     try {
      
       const {data} = await axios.get('http://localhost:3000/api/doctors/doctors-list')

       if(data.success){
        setDoctors(data.doctors)
       } else {
        toast.error(data.message)
       }

     } catch (error) {
       console.log(error)
       toast.error('Error to fetch doctors')      
     }
    
   }

   useEffect(()=>{
    fetchDoctors()
   },[])



  return (
    <div className="mt-6  flex flex-col items-center justify-center ">
           <h1 className="text-3xl md:text-4xl   font-medium">Top Doctors to Book</h1>
           <p className="text-md text-gray-500  py-2">Simply Browse through our extensive list of trusted doctors.</p>
           <div className="grid  sm:grid-cols-[1fr_1fr_1fr_1fr_1fr]  grid-cols-1  gap-5  mt-10">
            {doctors.map((item , index)=>{
                return(
                    <div key={index} onClick={()=>navigate(`/appiontment/${item._id}`)} className="border border-blue-300 rounded   cursor-pointer  hover:translate-y-[-10px]  transition-all duration-300">  
                         <img src={item.image} alt="" className="bg-blue-100 rounded-t "/>      
                          <div className="px-2 mt-1 flex gap-3">
                               <p className="h-2.5 w-2.5  mt-2 bg-green-500 rounded-full" ></p><p className="tetx-xs text-green-500">available</p>
                        </div>
                        <p className="px-2 text-sm font-medium">{item.name}</p>  
                        <p className="px-2 text-xs mb-2">{item.speciality}</p>
                   </div>
                )
            })}
           </div>
           <Link to={'/doctors'} onClick={()=>window.scrollTo({top:0, left:0, behavior:'smooth'

           })}>
            <button   className="bg-blue-100 rounded-full px-7 w-20 sm:w-40  py-2  mt-10  cursor-pointer ">more</button>
           </Link>
    </div>
  )
}

export default TopDoctors