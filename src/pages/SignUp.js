import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registeruser } from "../api/user";
import { toast } from "react-toastify";
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const onSubmitHanlder = async (e) => {
        e.preventDefault();
        try {
            const { data } = await registeruser(name, email, password);
            if (data.success) {
                toast.success('SignUp successfully');
                navigate('/');
            }
            else {
                toast.error(data.message);
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return (_jsx("form", { onSubmit: onSubmitHanlder, className: "  border    px-6 py-6 rounded-md w-80 mx-auto mt-10", children: _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-gray-500", children: "Sign Up" }), _jsxs("div", { children: [_jsx("h1", { className: "text-gray-600 text-md", children: "Name" }), _jsx("input", { value: name, onChange: (e) => setName(e.target.value), type: "text", className: "border mt-2 border-gray-300 p-2 w-full outline-none", placeholder: "Enter your name" })] }), _jsxs("div", { className: "mt-2", children: [_jsx("h1", { className: "text-gray-600 text-md", children: "Email" }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "border mt-2 border-gray-300 p-2 w-full outline-none", placeholder: "email" })] }), _jsxs("div", { className: "mt-2", children: [_jsx("h1", { className: "text-gray-600 text-md", children: "password" }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "border mt-2 border-gray-300 p-2 w-full outline-none", placeholder: "password" })] }), _jsx("button", { className: "bg-blue-600 text-white px-4 py-1 rounded-full w-full mt-2 cursor-pointer hover:bg-blue-500", children: "Sign Up" }), _jsxs("p", { className: "text-gray-500 mt-2", children: ["Already have an account? ", _jsx(Link, { className: "text-blue-500", to: '/login', children: "Login" })] })] }) }));
};
export default SignUp;
