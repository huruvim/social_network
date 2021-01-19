import axios from "axios";
import {UsersType} from "../components/Users/UsersContainer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': 'cfb6e34f-6374-462a-8da5-72f5e5249b28'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10): Promise<UsersType> {
        debugger
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    }
}
export const authAPI = {
    me() {
        debugger
        return instance.get(`auth/me`)
    }
}