import axios from 'axios';

// const url = 'https://rvpolicies.com:8000';
const axiosInstance = axios.create({ baseURL: process.env.API_URL });


export const authenticateLogin = async (user) => {
    try {
        return await axiosInstance.post(`/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axiosInstance.post(`/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const getProductById = async (id) => {
    try {
        return await axiosInstance.get(`/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error', error);
    }
}