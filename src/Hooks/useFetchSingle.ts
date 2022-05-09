import {useEffect, useState} from 'react';
import {httpGet} from 'Services/httpCalls';
import {FetchData, FetchDataSingleProps} from 'Types/FetchData';

const defaultConfig = {
  baseURL: 'https://api.guildwars2.com/v2/',
  headers: {
    // 'User-Agent': "Landfill GW2 React App"
  },
};

const useFetchSingleX = ({endpoint, config, id}: FetchDataSingleProps): FetchData => {

  const [data, setData] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let _alive = true;
    setLoading(true);

    const axiosRequest = {...config, ...{params: {id}}};
    httpGet(endpoint, axiosRequest).then((response) => {
      if (_alive) {
        setData(response.data);
      }
    }).catch(error => console.log(error)).finally(() => setLoading(false));

    return () => {_alive = false;};
  }, []);

  return {data, loading};
};

export default useFetchSingleX;