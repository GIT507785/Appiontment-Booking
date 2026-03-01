import assets from "../assets/assets/assets"

const About = () => {
  return (
    <div className="mt-10 mb-15">
      <h1 className="flex items-center justify-center font-medium text-2xl text-gray-600 gap-2 mt-3 ">ABOUT   <span className="text-black font-bold">US</span></h1>
      <div className="flex gap-15 mt-10 sm:flex-row flex-col">
        {/* left */}
        <div>
          <img src={assets.about_image}  alt="" className="w-full h-90" />
        </div>
        {/* right */}
        <div className="sm:w-1/2 w-full font-normal">
             <p className="text-sm text-gray-700 mt-2" >Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>

             <p className="text-sm text-gray-700 mt-5" > Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>

             <h5 className="font-bold py-4 text-xl">Our Vision</h5>

             <p className="text-sm text-gray-700 mt-2" >Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
              
        </div>
      </div>
      <div className="mt-10">
        <h1 className="flex items-start  font-medium text-2xl text-gray-600 gap-2 mt-3 "> WHY   <span className="text-black font-bold">CHOOSE US</span></h1>
        <div className="flex sm:flex-row flex-col mt-10 mb-6">
         <div className="border border-gray-400 px-13 py-13  flex flex-col">
          <h1 className="font-bold text-xl ">EFFICIENCY:</h1>     
          <p className="text-gray-600 mt-2">Streamlined appointment scheduling   that  fits into your busy lifestyle.</p>
        </div>   
          <div className="border border-gray-400 px-15 py-15  flex flex-col">
          <h1 className="font-bold text-xl ">CONVENIENCE:</h1>     
          <p className="text-gray-600 mt-2">Access to a network of trusted  healthcare professionals in  your area.</p>
        </div>
          <div className="border border-gray-400 px-15 py-15  flex flex-col">
          <h1 className="font-bold text-xl ">PERSONALIZATION:</h1>     
          <p className="text-gray-600 mt-2">Tailored recommendations and   reminders  to help you stay on top  of your health.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About