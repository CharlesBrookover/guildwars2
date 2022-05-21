import axios, {AxiosRequestConfig} from "axios";

/**
 * Use Axios to GET data from an endpoint
 * Helper to call asynchronous HTTP call
 *
 * @param url
 * @param config
 */
export const axiosGet = async (url: string, config: AxiosRequestConfig): Promise<any> => {
    const getConfig = {
        method: 'get',
        url
    };

    return await axiosFetch({...config, ...getConfig});
}

/**
 * Use Axios to POST data to an endpoint
 * Helper to call asynchronous HTTP call
 *
 * @param url
 * @param data
 * @param config
 */
export const axiosPost = async (url: string, data: object, config: AxiosRequestConfig): Promise<any> => {
    const postConfig = {
        data: data,
        method: 'POST',
        url
    };

    return await axiosFetch({...config, ...postConfig});
}

/**
 * Use Axios to fetch data from an URL
 * Helper to call asynchronous HTTP call
 *
 * @param config
 */
const axiosFetch = (config: AxiosRequestConfig): Promise<any> => axios(config);