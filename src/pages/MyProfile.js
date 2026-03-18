import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import assets from "../assets/assets/assets";
const MyProfile = () => {
    const [userData, setuserData] = useState({
        name: "Haseeb",
        image: assets.profile_pic,
        email: "hafizhaseeb4480gmail.com",
        phone: "+92 000 000 0000",
        address: {
            line1: '57th cross, Richmond',
            line2: 'Circle, Church Road , London'
        },
        gender: 'Male',
        Birthday: '20 May, 2024'
    });
    const [isEdit, setIsEdit] = useState(false);
    return (_jsxs("div", { className: "max-w-lg flex flex-col gap-2 text-sm", children: [_jsx("img", { src: userData.image, alt: "", className: "mt-4 w-40 rounded" }), isEdit ?
                _jsx("input", { type: "text", className: "bg-gray-50  text-3xl font-medium max-w-60 mt-4", value: userData.name, onChange: (e) => setuserData(prev => ({ ...prev, name: e.target.value })) })
                :
                    _jsx("p", { className: "text-black mt-2 text-2xl font-bold", children: userData.name }), _jsx("hr", { className: "sm:w-md w-30 mt-2 text-gray-400" }), _jsx("h3", { className: "underline text-gray-500 font-sans mt-4", children: "CONTACT INFORMATION" }), _jsxs("div", { className: "flex gap-4 mt-4", children: [_jsx("h5", { className: "mt-2 text-gray-600", children: " Email Id:" }), isEdit ?
                        _jsx("input", { type: "email", value: userData.email, onChange: (e) => setuserData(prev => ({ ...prev, email: e.target.value })) })
                        :
                            _jsx("p", { className: "text-blue-500 mt-2", children: userData.email })] }), _jsxs("div", { className: "flex gap-4 mt-4", children: [_jsx("h5", { className: "mt-2 text-gray-600", children: "Phone:" }), isEdit ?
                        _jsx("input", { type: "phone", value: userData.phone, onChange: (e) => setuserData(prev => ({ ...prev, phone: e.target.value })) })
                        :
                            _jsx("p", { className: "text-blue-500 mt-2", children: userData.phone })] }), _jsxs("div", { className: "flex gap-4 mt-4", children: [_jsx("h5", { className: "mt-2 text-gray-600", children: "Address:" }), isEdit ?
                        _jsxs("p", { children: [_jsx("input", { type: "text", onChange: (e) => setuserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } })), value: userData.address.line1 }), _jsx("br", {}), _jsx("input", { type: "text", onChange: (e) => setuserData(prev => ({ ...prev, address: { ...prev.address, address: e.target.value } })), value: userData.address.line2 })] })
                        :
                            _jsxs("p", { className: "text-blue-500  ", children: [userData.address.line1, _jsx("br", {}), userData.address.line2] })] }), _jsx("h3", { className: "underline text-gray-500 font-sans mt-4", children: "BASIC INFORMATION" }), _jsxs("div", { className: "flex gap-4 mt-4", children: [_jsx("h5", { className: "mt-2 text-gray-600", children: "Gender:" }), isEdit
                        ? _jsxs("select", { onChange: (e) => setuserData(prev => ({ ...prev, gender: e.target.value })), value: userData.gender, children: [_jsx("option", { value: "Male", children: "Male" }), _jsx("option", { value: "Female", children: "Female" })] })
                        :
                            _jsx("p", { className: "text-blue-500 mt-2", children: userData.gender })] }), _jsxs("div", { className: "flex gap-4 mt-4", children: [_jsx("h5", { className: "mt-2 text-gray-600", children: "Birthday:" }), isEdit ?
                        _jsx("input", { type: "date", value: userData.Birthday, onChange: (e) => setuserData(prev => ({ ...prev, Birthday: e.target.value })) })
                        :
                            _jsx("p", { className: "text-blue-500 mt-2", children: userData.Birthday })] }), _jsx("div", { className: "mt-5 ", children: isEdit ?
                    _jsx("button", { className: "px-8   py-2 cursor-pointer rounded-full border border-blue-500", onClick: () => setIsEdit(false), children: "Save  information" })
                    :
                        _jsx("button", { className: "px-8   py-2 cursor-pointer rounded-full border border-blue-500", onClick: () => setIsEdit(true), children: "Edit" }) })] }));
};
export default MyProfile;
