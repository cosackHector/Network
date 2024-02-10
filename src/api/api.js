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
        console.warn('Obsolete method. Please use profileAPI object.');
        return profileAPI.getProfile(profileId);
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
export const profileAPI = {
    async getProfile(profileId) {
        const response = await instance.get(`profile/` + profileId);
        return response.data;
    },
    async getStatus(userId) {
        const response = await instance.get(`profile/status/` + userId);
        return response.data;
    },
    async updateStatus(status) {
        const response = await instance.put(`profile/status/`, {status: status});
        return response.data;
    },
};
export const authAPI = {
    async me() {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
};