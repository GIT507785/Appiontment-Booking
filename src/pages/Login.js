import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../api/user";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const [state, setState] = useState('Sign Up');
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await loginUser(email, password);
            if (data.success) {
                toast.success('Login Successfylly');
                localStorage.setItem('token', data.token);
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
    return (_jsx("div", { className: "flex items-center justify-center  my-8", children: _jsxs("form", { onSubmit: onSubmitHandler, className: "min:h-[80vh] w-100  border rounded-md px-6 py-6", children: [_jsx("p", { className: "text-xl font-bold text-gray-600", children: "Login" }), _jsxs("div", { className: "mt-2", children: [_jsx("p", { className: "text-gray-600 text-[16px]", children: "Email " }), _jsx("input", { type: "text", onChange: (e) => setEmail(e.target.value), value: email, className: " w-full px-2 py-2 mt-1 rounded border border-gray-400 outline-none" })] }), _jsxs("div", { className: "mt-2", children: [_jsx("p", { className: "text-gray-600 text-[16px]", children: "password" }), _jsx("input", { type: "text", onChange: (e) => setPassword(e.target.value), value: password, className: "px-2 w-full text-start py-2 mt-1 rounded border border-gray-400 outline-none" })] }), _jsx("button", { className: "px-8 py-2 mt-2 w-full  bg-blue-500 text-white cursor-pointer rounded ", children: "Login " }), _jsxs("p", { className: "mt-2 text-gray-600 ", children: ["Create new account?", _jsx(Link, { to: '/sign-up ', className: "text-blue-500 cursor-pointer underline", children: "Sign Up" }), " "] })] }) }));
};
export default Login;
