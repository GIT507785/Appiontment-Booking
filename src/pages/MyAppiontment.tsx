import  { useState } from 'react'
import { doctors } from '../assets/assets/assets'

const MyAppiontment = () => {

    const [isPaid , setIsPaid] = useState(true)
  
  return (
    <div>
      <h1 className='text-gray-600 text-xl   sm:text-2xl mt-10'>Appiontments</h1>
      <hr  className='text-gray-300 w-full mt-4'/>

      <div>
          {doctors.slice(0,3).map((item)=>{
            return(
              <div key={item._id} className='flex border-b border-gray-300 p-2 flex-col sm:flex-row justify-between'>
                  <div className='grid grid-cols-1 sm:grid-cols-2'>
                       <div>
                        <img src={item.image} alt="" className= 'mt-8 bg-blue-100 w-50 sm:h-40 sm:w-35'/>
                        </div> 
                        <div className='mt-8 sm:-ml-8 ml-0'>
                          <p className='font-bold text-md'>{item.name}</p>
                          <p className='text-gray-600  text-sm'>{item.speciality}</p>
                          <h5 className='font-bold text-gray-600 mt-3'>Address</h5>
                          <p className='text-gray-600 mt-1 text-sm'>{item.address.line1}</p>
                          <p className='text-gray-600  text-sm'>{item.address.line2}</p>
                         <p className='text-gray-600 font-bold mt-1 text-sm'>Date & Time <span className='font-normal'>25 july , 2026  | 8:30 PM </span></p>
                        </div>  
                  </div>
                       
                  <div className='mt-10'>
                        {!isPaid ?
                       <button className=' cursor-pointer bg-blue-600 px-5 rounded text-white py-2'>Pay here</button>  
                       :
                       <div className='flex flex-col '>
                       <button className='mt-4 cursor-pointer bg-blue-600 px-5 rounded text-white py-2'>Paid</button>  
                       <button onClick={()=>setIsPaid(!isPaid)} className='mt-4 px-5 rounded cursor-pointer border border-gray-600 py-2'>Cancel appiontment</button>  
                       </div>
                        
                       }
                  </div> 
              </div>
            )
          })}    

      </div>


    </div>
  )
}

export default MyAppiontment