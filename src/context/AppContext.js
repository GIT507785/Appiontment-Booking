import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const AppContext = createContext(null);
const AppContextProvider = ({ children }) => {
    const [doctors, setDoctors] = useState([]);
    const value = {
        doctors,
        setDoctors
    };
    return (_jsx(AppContext.Provider, { value: value, children: children }));
};
export default AppContextProvider;
