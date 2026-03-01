import { useEffect, useState } from "react"
import { doctors } from "../assets/assets/assets"
import { Link, useParams } from "react-router-dom"
import { FcAbout } from "react-icons/fc"
import RelatedDoctors from "../components/RelatedDoctors"

interface DocInformation {
  _id: string
  name: string
  image: string
  speciality: string
  degree: string
  experience: string
  about: string
  fees: number
  address: {
    line1: string
    line2: string
  }
}

 

  interface TimeSlots {
    datetime: Date;
    time: string;
}

const Appointment = () => {
  const { docId } = useParams<string>()


  const [docSlots , setDocSlots] = useState<TimeSlots[][]>([])
  const [slotIndex , setSlotIndex] = useState(0)
   const [time , setTime] = useState<TimeSlots>()


  const [docInfo, setDocIfo] = useState<DocInformation | null>(null)


  const fetchDoctorData = async () => {
    if (!docId) return
    const doctor = doctors.find((doc) => doc._id === docId)
    setDocIfo(doctor || null)
  }
  useEffect(() => {
    fetchDoctorData()
  }, [docId])

 
   const getAvailableSlots = () => {
  const today = new Date()
  const slots: any[] = []

  for (let i = 0; i < 7; i++) {   // 👈 7 days

    const currentDate = new Date(today)
    currentDate.setDate(today.getDate() + i)

    const daySlots: any[] = []

    let startTime = new Date(currentDate)
    startTime.setHours(10, 0, 0)

    for (let j = 0; j < 8; j++) {
      const tempDate = new Date(startTime)
      tempDate.setMinutes(startTime.getMinutes() + j * 30)

      daySlots.push({
        datetime: new Date(tempDate),
        time: tempDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      })
    }

    slots.push(daySlots)
  }

  setDocSlots(slots)
}



   useEffect(()=>{
    getAvailableSlots()
   },[docInfo])


     useEffect(() =>{
       console.log(docSlots)
     },[docSlots])


       const daysOfWeek = [
     "Sun",
     "Mon",
     "Tue",
     "Wed",
     "Thu",
     "Fri",
     "Sat",
]


  return (
  <>
   <div className="mt-10 mb-10 px-4">
  <div className="flex flex-col md:flex-row gap-6">

    {/* LEFT IMAGE */}
    <div className="bg-blue-400 rounded-lg overflow-hidden 
                    w-full md:w-1/3 flex justify-center items-end">
      <img
        src={docInfo?.image}
        alt={docInfo?.name}
        className="w-full h-72 md:h-full object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="w-full md:w-2/3 border px-6 py-5 
                    border-gray-300 rounded-lg">

      <p className="font-bold text-2xl md:text-3xl">
        {docInfo?.name}
      </p>

      <div className="flex flex-wrap items-center gap-3 mt-2">
        <p className="text-sm text-gray-600">
          {docInfo?.speciality}
        </p>

        <p className="border px-3 py-1 text-sm text-gray-600 
                      rounded-full border-gray-300">
          {docInfo?.experience}
        </p>
      </div>

      <h5 className="flex font-bold gap-1 mt-4 items-center">
        About
        <FcAbout />
      </h5>

      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
        {docInfo?.about}
      </p>

      <p className="text-sm mt-4 text-gray-600">
        Appointment fee:
        <span className="font-bold text-black ml-2">
          ${docInfo?.fees}
        </span>
      </p>

    </div>
  </div>
</div>


   {/* booking slots */}
   <div className="w-full mt-6 px-4 md:px-0 font-medium text-gray-700">

  <p className="text-xl md:text-2xl mb-4 font-bold">
    Booking Slots
  </p>

  {/* DAY SELECTOR */}
  <div className="flex gap-3 overflow-x-auto scrollbar-hide py-4">

    {docSlots.length > 0 &&
      docSlots.map((item, index) => (

        <div
          key={index}
          onClick={() => setSlotIndex(index)}
          className={`text-center py-4 px-4 min-w-[70px] 
            rounded-full cursor-pointer transition-all duration-200
            ${slotIndex === index
              ? "bg-blue-500 text-white"
              : "border border-gray-300 text-gray-600"
            }`}
        >
          <p className="text-sm font-medium">
            {item[0]?.datetime &&
              daysOfWeek[item[0].datetime.getDay()]}
          </p>

          <p className="text-sm">
            {item[0]?.datetime &&
              item[0].datetime.getDate()}
          </p>

        </div>
      ))
    }

  </div>

  {/* TIME SELECTOR */}
  <div className="flex gap-3 overflow-x-auto scrollbar-hide mt-4 pb-4">

    {docSlots.length > 0 &&
      docSlots[slotIndex]?.map((item, index) => (

        <p onClick={()=>setTime(item.time)}
          key={index}
          className="text-sm flex-shrink-0 px-5 py-2 
                     border border-gray-300 
                     rounded-full cursor-pointer 
                     hover:bg-blue-500 hover:text-white 
                     transition"
        >
          {item.time.toLowerCase()}
        </p>

      ))
    }
  </div>
       <Link to={''} className="flex  w-sm items-center justify-center bg-blue-500 text-white
        rounded-full  py-2 mx-auto mt-4 cursor-pointer">Book an Appiontment</Link>

</div>

     
     <div className="mt-10">
      <RelatedDoctors docId=""/>
     </div>
  </>
  )
}

export default Appointment
   