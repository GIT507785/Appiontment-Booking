import { Link } from "react-router-dom"
import { specialityData } from "../assets/assets/assets"



const SpecialityMenu = () => {
  return (
    <div id='#speciality' className="flex flex-col  items-center justify-center  py-5 ">
       <h1 className="mt-10 py-3 text-3xl md:text-4xl lg:text-5xl font-medium">Find By Speciality</h1>  
       <p className="text-gray-500  ">Simply browse through our extensive list of trusted <br /> doctors, schedule your appointment hassle-free.</p>
       <div className=" grid mt-3 py-5 pb-10 gap-5 sm:grid-cols-6 grid-cols-2">
         {specialityData.map((item , index)=>{
            return(
                <Link to={`/doctors/${item.speciality}`} onClick={()=>window.scrollTo({
                  top:0,
                  left:0,
                  behavior:"smooth"
                })}  key={index}>  
                    <img src={item.image} alt="" className="w-25"/>
                    <p className="text-xs mt-1 relative">{item.speciality}</p>
                </Link>
            )
         })}
       </div>
    </div>
  )
}

export default SpecialityMenu