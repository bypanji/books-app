import axios,  {type AxiosResponse} from 'axios'

export async function getDashboard(): Promise<AxiosResponse> {
    return axios.get(`api/dashboard`)
}