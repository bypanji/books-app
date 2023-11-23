import axios, { type AxiosResponse } from 'axios'
export interface IFormLogin {
    email : string,
    password : string
}

interface IResLogin {
    token : string
}

export async function authLogin(body : IFormLogin): Promise<AxiosResponse<IResLogin>> {
    return axios.post(`api/auth/login`, body)
}

export async function getRole(token : string): Promise<AxiosResponse> {
    const headers = {
        Authorization: `Bearer ${token}`,
    }
    return axios.get(`api/users/me`, { headers:  headers })
}
