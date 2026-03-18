import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDoctorsList } from "../api/doctors";
const Doctors = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const fetchDoctors = async () => {
        try {
            const data = await fetchDoctorsList();
            if (data.success) {
                setDoctors(data.doctors);
            }
            else {
                toast.error(data.message);
            }
        }
        catch (error) {
            toast.error('erro to fetch doctors');
        }
    };
    useEffect(() => {
        fetchDoctors();
    }, []);
    const speciality_Categrries = [
        { speciality: 'General physician' },
        { speciality: 'Gynecologist' },
        { speciality: 'Dermatologist' },
        { speciality: 'Pediatricians' },
        { speciality: 'Neurologist' },
        { speciality: 'Gastroenterologist' }
    ];
    const [category, setCategory] = useState();
    const filterDoctors = category ? doctors.filter((doc) => doc.speciality === category) : doctors;
    return (_jsxs("div", { className: "mt-3 mb-6", children: [_jsx("p", { className: "mt-8 text-gray-600", children: "Browse through the doctors speciality." }), _jsxs("div", { className: "flex gap-6 sm:flex-row flex-col ", children: [_jsx("div", { className: "mt-5", children: speciality_Categrries.map((item, index) => {
                            return (_jsx("div", { className: "p-2", onClick: () => setCategory(item.speciality), children: _jsx("p", { className: `${item.speciality === category ? 'bg-blue-400' : ''} px-4 py-1   rounded text-md text-gray-800 font-sans cursor-pointer border border-gray-300`, children: item.speciality }) }, index));
                        }) }), _jsx("div", { className: "grid  sm:grid-cols-[1fr_1fr_1fr_1fr]  grid-cols-1  gap-5  mt-10", children: filterDoctors.map((item, index) => {
                            return (_jsxs("div", { onClick: () => navigate(`/appiontment/${item._id}`), className: "border border-blue-300 rounded   cursor-pointer  hover:translate-y-[-10px]  transition-all duration-300", children: [_jsx("img", { src: item.image, alt: "", className: "bg-blue-100 rounded-t " }), _jsxs("div", { className: "px-2 mt-1 flex gap-3", children: [_jsx("p", { className: "h-2.5 w-2.5  mt-2 bg-green-500 rounded-full" }), _jsx("p", { className: "tetx-xs text-green-500", children: "available" })] }), _jsx("p", { className: "px-2 text-sm font-medium", children: item.name }), _jsx("p", { className: "px-2 text-xs mb-2", children: item.speciality })] }, index));
                        }) })] })] }));
};
export default Doctors;
