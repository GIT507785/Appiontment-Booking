import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../constants/api";
export const fetchDoctorsList = async () => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/doctors/doctors-list`);
        return data;
    }
    catch (error) {
        toast.error("erro to fetch doctors");
    }
};
export const fetchSingleDoctor = async (docId) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/doctors/doctor-data/${docId}`);
        return data;
    }
    catch (error) {
        toast.error('error to fetch doctor data');
    }
};
