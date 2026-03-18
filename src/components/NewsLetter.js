import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import assets from "../assets/assets/assets";
const NewsLetter = () => {
    return (_jsx("div", { className: "flex py-10 items-center justify-center mt-7 overflow-hidden", children: _jsxs("div", { className: "bg-blue-600 flex items-center  justify-between px-10 h-120 overflow-hidden   w-250", children: [_jsxs("div", { children: [_jsxs("p", { className: "text-white font-bold text-3xl md:text-4xl py-2 leading-0.6  lg:text-5xl", children: ["Book Appointment ", _jsx("br", {}), " With 100+ ", _jsx("br", {}), " Trusted Doctors"] }), _jsx("button", { className: "bg-gray-100 text-gray-700 rounded-full px-10 py-3 mt-5  ", children: "Create Accout" })] }), _jsx("div", { children: _jsx("img", { src: assets.appointment_img, alt: "", className: "h-128 bottom-0" }) })] }) }));
};
export default NewsLetter;
