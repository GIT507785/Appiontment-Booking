import { toast } from "react-toastify";
import { doctor } from "../types/doctors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDoctorsList } from "../api/doctors";


const Doctors = () => {

  const navigate = useNavigate()

  interface speciality_doctor {
    speciality: string;
  }

  const [doctors, setDoctors] = useState<doctor[]>([])

  const fetchDoctors = async () => {

    try {
      const data = await fetchDoctorsList();
      if (data.success) {
        setDoctors(data.doctors)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('erro to fetch doctors')
    }

  }

  useEffect(() => {
    fetchDoctors()
  }, [])

  const speciality_Categrries: speciality_doctor[] = [
    { speciality: 'General physician' },
    { speciality: 'Gynecologist' },
    { speciality: 'Dermatologist' },
    { speciality: 'Pediatricians' },
    { speciality: 'Neurologist' },
    { speciality: 'Gastroenterologist' }

  ]


  const [category, setCategory] = useState<string>()

  const filterDoctors = category ? doctors.filter((doc) => doc.speciality === category) : doctors



  return (
    <div className="mt-3 mb-6">
      <p className="mt-8 text-gray-600">Browse through the doctors speciality.</p>
      <div className="flex gap-6 sm:flex-row flex-col ">

        {/* left */}
        <div className="mt-5">
          {speciality_Categrries.map((item, index) => {
            return (
              <div className="p-2" key={index} onClick={() => setCategory(item.speciality)}>
                <p className={`${item.speciality === category ? 'bg-blue-400' : ''} px-4 py-1   rounded text-md text-gray-800 font-sans cursor-pointer border border-gray-300`}>{item.speciality}</p>
              </div>
            )
          })}
        </div>
        {/* right */}
        <div className="grid  sm:grid-cols-[1fr_1fr_1fr_1fr]  grid-cols-1  gap-5  mt-10">
          {filterDoctors.map((item, index) => {
            return (
              <div key={index} onClick={() => navigate(`/appiontment/${item._id}`)} className="border border-blue-300 rounded   cursor-pointer  hover:translate-y-[-10px]  transition-all duration-300">
                <img src={item.image} alt="" className="bg-blue-100 rounded-t " />
                <div className="px-2 mt-1 flex gap-3">
                  <p className="h-2.5 w-2.5  mt-2 bg-green-500 rounded-full" ></p><p className="tetx-xs text-green-500">available</p>
                </div>
                <p className="px-2 text-sm font-medium">{item.name}</p>
                <p className="px-2 text-xs mb-2">{item.speciality}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Doctors