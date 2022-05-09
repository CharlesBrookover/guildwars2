import {useEffect, useState} from 'react';
import {httpGet} from 'Services/httpCalls';
import {FetchData, FetchDataSingleProps} from 'Types/FetchData';

function useFetchSingle<Type extends {}>({
  endpoint,
  id, config,
}: FetchDataSingleProps): FetchData<Type> {
  const [data, setData] = useState<Type>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let _alive = true;
    setLoading(true);

    httpGet(endpoint, {
      ...config,
      ...{param: id},
    })
        .then(response => {
          _alive && setData(response.data);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    return () => { _alive = false;};
  }, []);
  // }, [endpoint, id]);
  return {data, loading};
};

export default useFetchSingle;