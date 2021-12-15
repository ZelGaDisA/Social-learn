import * as axios from "axios"

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'


const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY": "718ec874-1ab3-4071-8420-87750c11fc6f"
        }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
        .then(response => {
            return response.data;
    });
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return axios.get(baseUrl + `follow?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
        .then(response => {
            return response.data;
    });
}