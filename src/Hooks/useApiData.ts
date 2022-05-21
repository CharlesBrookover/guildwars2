import {AxiosError, AxiosRequestConfig} from 'axios';
import {useEffect, useState} from 'react';
import {axiosGet} from "../Utils/helpers";
import {ApiDataOut} from "../Types/FetchData";

const useApiData = (): ApiDataOut => {

    const [endpoint, setEndpoint] = useState<string>('');
    const [config, setConfig] = useState<AxiosRequestConfig>({});

    const [data, setData] = useState<object>({});
    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        let _alive = true;
        setLoading(true);

        if (endpoint !== '') {
            axiosGet(endpoint, config)
                .then(response => {
                    console.log('Axios: %o', response);
                    if (_alive) {
                        setData(response.data);
                        if (response.status === 206) {
                            setMessage('Not all IDS returned.')
                        }
                    }
                })
                .catch((error: AxiosError) => {
                    console.log('Api Error: %o', error);
                    setError(error.message);
                });
        }

        setLoading(false);

        return () => {
            _alive = false;
        }
    }, [endpoint, config]);

    return {data, loading, setEndpoint, setConfig, error, message};
};

export default useApiData;