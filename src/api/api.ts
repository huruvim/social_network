import axios from "axios";
import {UsersType} from "../components/Users/UsersContainer";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-Key': 'cfb6e34f-6374-462a-8da5-72f5e5249b28'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10): Promise<UsersType> {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: any) {
        return instans.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId: any) {
        return instans.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}
