import  { useEffect, useState } from 'react'
import { doctors } from '../assets/assets/assets'
import { useNavigate } from 'react-router-dom'

interface DoctorId {
  docId: string
}

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

const RelatedDoctors = ({ docId }: DoctorId) => {

  // ✅ Make it an ARRAY
  const [relatedDoctor, setRelatedDoctor] = useState<DocInformation[]>([])

  const navigate = useNavigate()

  useEffect(() => {
  if (doctors.length > 0) {

    const currentDoctor = doctors.find(
      (doc) => doc._id === docId
    )

    if (!currentDoctor) return

    const relatedDoctorsData = doctors.filter(
      (doc) =>
        doc._id !== docId &&
        doc.speciality === currentDoctor.speciality
    )

    setRelatedDoctor(relatedDoctorsData)
  }
}, [docId])


  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-medium">
        Related Doctors to Book
      </h1>


      <div className="grid sm:grid-cols-5 grid-cols-1 gap-5 mt-10">

        {relatedDoctor.slice(0, 10).map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-300 rounded cursor-pointer hover:translate-y-[-10px] transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="bg-blue-100 rounded-t"
            />

            <div className="px-2 mt-1 flex gap-3">
              <p className="h-2.5 w-2.5 mt-2 bg-green-500 rounded-full"></p>
              <p className="text-xs text-green-500">Available</p>
            </div>

            <p className="px-2 text-sm font-medium">{item.name}</p>
            <p className="px-2 text-xs mb-2">{item.speciality}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default RelatedDoctors
