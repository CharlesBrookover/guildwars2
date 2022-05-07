import axios from 'axios';
import {useEffect, useState} from 'react';

type FetchApiProps = {
  endpoint: string,
  config?: {
    [key: string]: any
  }
};
// type FetchApi = {
//   data: any
// };

const defaultConfig = {
  baseUrl: 'https://api.guildwars2.com/v2/',
  headers: {
    'X-Schema-Version': 'latest',
    'Accept-Language': 'en',
    'User-Agent': "Landfill's React App"
  },
};

const useFetchApi = (props: FetchApiProps): any => {

  const [data, setData] = useState({});
  const [pageInfo, setPageInfo] = useState({
    total: 0,
    count: 0,
    page: 0,
    pageSize: 50
  });

  useEffect(() => {
    let _cancelled = false;

    axiosGet({endpoint: props.endpoint, config: {...defaultConfig, ...props.config}})
        .then(response => {
          !_cancelled && setData(response.data);
          Object.entries(response.headers)
              .filter(([key]) => /^x-(result|page)-/.test(key));
          !_cancelled && setPageInfo(pageInfo);
        }).catch(error => console.log('Bad Error: %o', error));

    return () => { _cancelled = true;};
  }, [props.endpoint]);

  return {data};
};

type GetData = {
  endpoint: string,
  config: object
}

async function axiosGet(options: GetData): Promise<any> {
  const promise =  await axios.get(options.endpoint, options.config)
      .catch(error => {
        console.log(error);
        throw error;
      });

  return promise;
}

export default useFetchApi;