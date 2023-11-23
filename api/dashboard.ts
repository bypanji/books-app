import axios,  { type AxiosResponse } from 'axios'
export interface IResponseUsers {
    userId: number
    id: number
    title: string
    completed: boolean
    _id?: string,
  }

  export interface IResponseBooks {
    data: IResponseDataBooks[]
    page: number
    limit: number
    total: number
    pages: number
  }
  
  export interface IResponseDataBooks {
    _id: string
    name: string
    description: string
    created_by_id: string
    created: string
  }

export interface IPayloadUser {
    email: string
    username: string
    password: string
    confirm: string
    role?: string
  }

  export interface IResponseDetail {
    _id: string
    username: string
    email: string
    role: string
    active: boolean
    created: string
  }

export async function getDashboard(): Promise<AxiosResponse> {
    return axios.get(`api/dashboard`)
}

export async function getListUsers(page: number, limit: number, cookie?: string): Promise<AxiosResponse<IResponseUsers[]>> {
    const params = {
        page: page,
        limit: limit
    }
    const headers = {
        Authorization: `Bearer ${cookie}`,
    }
    return axios.get(`api/users`, { params: params, headers: headers })
}

export async function getListBooks(page: number, limit: number, token?: string): Promise<AxiosResponse<IResponseBooks[]>> {
    const params = {
        page: page,
        limit: limit
    }
    const headers = {
        Authorization: `Bearer ${token}`,
    }
    return axios.get(`api/books`, { params: params, headers: headers })
}

export async function getDetailUser(id: string | number, token?: string,): Promise<AxiosResponse<IResponseDetail[]>> {

    const headers = {
        Authorization: `Bearer ${token}`,
    }
    return axios.get(`api/users/${id}`, { headers: headers })
}

export async function createUser(payload: IPayloadUser, token?: string,): Promise<AxiosResponse<IResponseUsers[]>> {

    const headers = {
        Authorization: `Bearer ${token}`,
    }
    return axios.post(`api/users`, payload, { headers: headers })
}
