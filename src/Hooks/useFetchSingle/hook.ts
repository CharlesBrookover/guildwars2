import {useEffect} from 'react';
import {FetchData, FetchSingleProps} from 'Types/FetchData';
import useApiData from "../useApiData";
import {defaultAxiosConfig} from "../../Utils/defaults";
import {AxiosRequestConfig} from "axios";


const useFetchSingle = ({endpoint, id, auth}: FetchSingleProps): FetchData<object> => {

    const {data, loading, error, message, setEndpoint, setConfig} = useApiData();

    useEffect(() => {
        let _alive = true;

        if (_alive) {
            setEndpoint(endpoint);
            setConfig(() => {
                const singleConfig: AxiosRequestConfig = {};
                if (auth) {
                    singleConfig['headers'] = {Authorization: 'Bearer ' + auth}
                }
                if (id) {
                    singleConfig['params'] = {id};
                }

                return {...defaultAxiosConfig, ...singleConfig}
            });
        }

        return () => {
            _alive = false
        }
    }, [endpoint, id, auth]);

    return {data, loading, error, message};
}

export default useFetchSingle;