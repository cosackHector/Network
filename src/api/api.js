import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const userAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async getProfile(profileId) {
        const response = await instance.get(`profile/` + profileId);
        return response.data;
    },
    async getAuth() {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
    async unFollowing(id) {
        const response = await instance.delete(`follow/${id}`);
        return response.data;
    },
    async following(id) {
        const response = await instance.post(`follow/${id}`, {});
        return response.data;
    },
};