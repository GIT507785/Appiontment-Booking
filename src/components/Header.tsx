import { Link } from 'react-router-dom'
import assets from '../assets/assets/assets'

const Header = () => {
  return (
    <div className='bg-blue-500 flex flex-col md:flex-row mt-3 px-6  md:px-10  lg:px-20 rounded '>
            {/* left side */}
            <div className='py-10 md:w-1/2 flex items-start justify-center flex-col md:py-[10vh] '>
                <p className='text-3xl md:text-4xl lg:text-5xl  font-semibold  text-white'>Book Appiontment <br /> With Trusted Doctors</p>
                <div className='flex gap-4 mt-3 sm:flex-row flex-col'>
                    <img src={assets.group_profiles} alt="" />
                    <p className='text-white text-light sm:text-sm text-xs'>Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.</p>
                </div>
                        <Link to='/doctors'   className='mt-4 bg-white text-gray-500 flex items-center justify-center gap-4 rounded-full px-4 py-2 w-60 '>
                            Book Appointment <img src={assets.arrow_icon} alt="" className='size-4'/>
                        </Link>
            </div>

            {/* right side */}
            <div className='md:w-1/2 relative'>
                <img src={assets.header_img} alt=""  className='sm:block hidden  bottom-0 absolute  h-auto'/>
            </div> 
    </div>
  )
}

export default Header