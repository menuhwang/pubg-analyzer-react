import axios from 'axios';
import {API_HOST} from "../../constants/api";

export const useAxios = axios.create({
    baseURL: API_HOST,
})