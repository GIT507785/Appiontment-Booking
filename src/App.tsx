import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Login from "./pages/Login"
import MyProfile from "./pages/MyProfile"
import MyAppiontment from "./pages/MyAppiontment"
import Doctors from "./pages/Doctors"
import Appointment from "./pages/Appointment"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"
import { useState } from "react"
import SignUp from "./pages/SignUp"

export const API_URI =   import.meta.env.API_VITE_URL

const App = () => {
  
   const [token , setToken ] = useState<string | null>(localStorage.getItem('token')) 

  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer/>
      <Navbar token={token} setToken={setToken}/>
      <Routes>
     
           {!token && (
             <>
            <Route path="/login" element={<Login/>}/>
            </>
        )}

             
             <Route  path="/" element={<Home/>}/>
        <Route  path="/doctors" element={<Doctors/>}/>
        <Route  path="/doctors/:speciality" element={<Doctors/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/my-profile" element={<MyProfile/>}/>
        <Route  path="/my-appiontments" element={<MyAppiontment/>}/>
        <Route  path="/appiontment/:docId" element={<Appointment/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App