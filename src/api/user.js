import axios from "axios";
import { API_BASE_URL } from "../constants/api";
import { toast } from "react-toastify";
export const loginUser = async (email, password) => {
    try {
        const data = await axios.post(`${API_BASE_URL}/api/user/login`, { email, password });
        return data;
    }
    catch (error) {
        console.log(error);
        toast.error('error to login');
    }
};
export const registeruser = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/user/register`, { name, email, password });
        return response;
    }
    catch (error) {
        console.log(error);
        toast.error('error to sign up ');
    }
};
