import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets/assets";
const SpecialityMenu = () => {
    return (_jsxs("div", { id: '#speciality', className: "flex flex-col  items-center justify-center  py-5 ", children: [_jsx("h1", { className: "mt-10 py-3 text-3xl md:text-4xl lg:text-5xl font-medium", children: "Find By Speciality" }), _jsxs("p", { className: "text-gray-500  ", children: ["Simply browse through our extensive list of trusted ", _jsx("br", {}), " doctors, schedule your appointment hassle-free."] }), _jsx("div", { className: " grid mt-3 py-5 pb-10 gap-5 sm:grid-cols-6 grid-cols-2", children: specialityData.map((item, index) => {
                    return (_jsxs(Link, { to: `/doctors/${item.speciality}`, onClick: () => window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        }), children: [_jsx("img", { src: item.image, alt: "", className: "w-25" }), _jsx("p", { className: "text-xs mt-1 relative", children: item.speciality })] }, index));
                }) })] }));
};
export default SpecialityMenu;
