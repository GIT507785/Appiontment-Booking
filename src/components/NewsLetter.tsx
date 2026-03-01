import assets from "../assets/assets/assets"

const NewsLetter = () => {
  return (
    <div className="flex py-10 items-center justify-center mt-7 overflow-hidden">
      <div className="bg-blue-600 flex items-center  justify-between px-10 h-120 overflow-hidden   w-250">
        <div>
        <p className="text-white font-bold text-3xl md:text-4xl py-2 leading-0.6  lg:text-5xl">Book Appointment <br /> With 100+ <br /> Trusted Doctors</p>
        <button className="bg-gray-100 text-gray-700 rounded-full px-10 py-3 mt-5  " >Create Accout</button>
        </div>
           <div>
            <img src={assets.appointment_img} alt="" className="h-128 bottom-0"/>
           </div>
      </div>
    </div>
  )
}

export default NewsLetter