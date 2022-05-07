import axios from 'axios';
import React, {useEffect, useState} from 'react';

type FetchDataProps = {
  endpoint: string,
  params?: Array<any>,
}

type FetchData = {
  data: any,
  loading: boolean
}

const useFetchData = ({endpoint, params}: FetchDataProps): FetchData => {

  const [data, setData] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let _alive = true;
    setLoading(true);

    axiosGet(endpoint).then((response) => {
      if (_alive) {
        setData(response.data);
      }
    }).catch(error => console.log(error)).finally(() => setLoading(false));

    return () => {_alive = false};
  }, []);

  return {data, loading};
};


const defaultConfig = {
  baseURL: 'https://api.guildwars2.com/v2/',
  headers: {
    // 'User-Agent': "Landfill GW2 React App"
  }
};

async function axiosGet(url: string, config?: object): Promise<any> {
  const res =  await axios.get(url, {...defaultConfig, ...config});
  return res;
}

export default useFetchData;