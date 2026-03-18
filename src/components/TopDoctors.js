import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
// import { doctors } from "../assets/assets/assets"
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const TopDoctors = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const fetchDoctors = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/doctors/doctors-list');
            if (data.success) {
                setDoctors(data.doctors);
            }
            else {
                toast.error(data.message);
            }
        }
        catch (error) {
            console.log(error);
            toast.error('Error to fetch doctors');
        }
    };
    useEffect(() => {
        fetchDoctors();
    }, []);
    return (_jsxs("div", { className: "mt-6  flex flex-col items-center justify-center ", children: [_jsx("h1", { className: "text-3xl md:text-4xl   font-medium", children: "Top Doctors to Book" }), _jsx("p", { className: "text-md text-gray-500  py-2", children: "Simply Browse through our extensive list of trusted doctors." }), _jsx("div", { className: "grid  sm:grid-cols-[1fr_1fr_1fr_1fr_1fr]  grid-cols-1  gap-5  mt-10", children: doctors.map((item, index) => {
                    return (_jsxs("div", { onClick: () => navigate(`/appiontment/${item._id}`), className: "border border-blue-300 rounded   cursor-pointer  hover:translate-y-[-10px]  transition-all duration-300", children: [_jsx("img", { src: item.image, alt: "", className: "bg-blue-100 rounded-t " }), _jsxs("div", { className: "px-2 mt-1 flex gap-3", children: [_jsx("p", { className: "h-2.5 w-2.5  mt-2 bg-green-500 rounded-full" }), _jsx("p", { className: "tetx-xs text-green-500", children: "available" })] }), _jsx("p", { className: "px-2 text-sm font-medium", children: item.name }), _jsx("p", { className: "px-2 text-xs mb-2", children: item.speciality })] }, index));
                }) }), _jsx(Link, { to: '/doctors', onClick: () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth'
                }), children: _jsx("button", { className: "bg-blue-100 rounded-full px-7 w-20 sm:w-40  py-2  mt-10  cursor-pointer ", children: "more" }) })] }));
};
export default TopDoctors;
