import React, { createContext , useState, type PropsWithChildren } from "react";
import { doctors } from "../assets/assets/assets";


  
export interface doctors {
    _id: string;
    name: string;
    image: string;
    speciality: string;
    degree: string;
    experience: string;
    about: string;
    fees: number;
    address: {
        line1: string;
        line2: string;
    };
}

  interface AppContextType {
    doctors:any[],
   setDoctors:React.Dispatch<React.SetStateAction<any[]>>
  }

 export const AppContext = createContext<AppContextType | null>(null);

 const AppContextProvider = ({children} : PropsWithChildren) =>{

    const [doctors , setDoctors] = useState<any[]>([])

  const value = {
    doctors,
    setDoctors
  }

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )



 }

 export default AppContextProvider

