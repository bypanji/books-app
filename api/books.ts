import axios,  { type AxiosResponse } from 'axios'

export interface IPayloadBooks {
    name: string
    description: string
}

export interface IResponseBooks {
    _id: string
    name: string
    description: string
    created_by_id: string
    created: string
  }

export const manageBooks = {
    getDetail: async (id: string | number, token: string): Promise<AxiosResponse<IResponseBooks[]>> => {
        const headers = {
            Authorization: `Bearer ${token}`,
        }
      return axios.get(`api/books/${id}`, { headers: headers})
    },
  
    create: (body: IPayloadBooks, token: string): Promise<AxiosResponse<IResponseBooks[]>> => {
        const headers = {
            Authorization: `Bearer ${token}`,
        }
      return axios.post('/api/books', body, { headers : headers })
    },
  
    update: (id: string | number, body: IPayloadBooks, token?: string): Promise<AxiosResponse<IResponseBooks[]>> => {
        const headers = {
            Authorization: `Bearer ${token}`,
        }
      return axios.put(`/api/books/${id}`, body, { headers: headers })
    },
  }