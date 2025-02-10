import axios from "axios";
import {UserDataSingnup} from "../components/Interface"

const API_BASE_URL = 'https://bcd-cogip.tidjee-dev.eu/api';

export const Signup = async(data:UserDataSingnup) => {
    try {
        console.log(data)
        const response = await axios.post(`${API_BASE_URL}/users`, data);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        throw error;
    }

}

export default{
    Signup
};    