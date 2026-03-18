import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { doctors } from '../assets/assets/assets';
const MyAppiontment = () => {
    const [isPaid, setIsPaid] = useState(true);
    return (_jsxs("div", { children: [_jsx("h1", { className: 'text-gray-600 text-xl   sm:text-2xl mt-10', children: "Appiontments" }), _jsx("hr", { className: 'text-gray-300 w-full mt-4' }), _jsx("div", { children: doctors.slice(0, 3).map((item) => {
                    return (_jsxs("div", { className: 'flex border-b border-gray-300 p-2 flex-col sm:flex-row justify-between', children: [_jsxs("div", { className: 'grid grid-cols-1 sm:grid-cols-2', children: [_jsx("div", { children: _jsx("img", { src: item.image, alt: "", className: 'mt-8 bg-blue-100 w-50 sm:h-40 sm:w-35' }) }), _jsxs("div", { className: 'mt-8 sm:-ml-8 ml-0', children: [_jsx("p", { className: 'font-bold text-md', children: item.name }), _jsx("p", { className: 'text-gray-600  text-sm', children: item.speciality }), _jsx("h5", { className: 'font-bold text-gray-600 mt-3', children: "Address" }), _jsx("p", { className: 'text-gray-600 mt-1 text-sm', children: item.address.line1 }), _jsx("p", { className: 'text-gray-600  text-sm', children: item.address.line2 }), _jsxs("p", { className: 'text-gray-600 font-bold mt-1 text-sm', children: ["Date & Time ", _jsx("span", { className: 'font-normal', children: "25 july , 2026  | 8:30 PM " })] })] })] }), _jsx("div", { className: 'mt-10', children: !isPaid ?
                                    _jsx("button", { className: ' cursor-pointer bg-blue-600 px-5 rounded text-white py-2', children: "Pay here" })
                                    :
                                        _jsxs("div", { className: 'flex flex-col ', children: [_jsx("button", { className: 'mt-4 cursor-pointer bg-blue-600 px-5 rounded text-white py-2', children: "Paid" }), _jsx("button", { onClick: () => setIsPaid(!isPaid), className: 'mt-4 px-5 rounded cursor-pointer border border-gray-600 py-2', children: "Cancel appiontment" })] }) })] }, item._id));
                }) })] }));
};
export default MyAppiontment;
