import {AxiosRequestConfig} from 'axios';
import qs from 'qs';
import {useEffect, useState} from 'react';
import {httpGet} from 'Services/httpCalls';
import {FetchData, FetchDataMultipleProps} from 'Types/FetchData';

function useFetchMultiple<Type>({endpoint, ids, config}: FetchDataMultipleProps): FetchData<Type> {

  const [data, setData] = useState<Type>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let _alive = true;
    setLoading(true);

    const paramConfig: AxiosRequestConfig = {
      params: {ids: ids},
      paramsSerializer: (params: any) => qs.stringify(params, {arrayFormat: 'comma'}),
    };

    httpGet(endpoint, {
      ...config,
      ...paramConfig,
    })
        .then(response => {
          _alive && setData(response.data);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    return () => { _alive = false;};
  }, [endpoint, ids]);

  return {data, loading};
};

export default useFetchMultiple;