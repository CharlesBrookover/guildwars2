import {useEffect, useState} from 'react';
import {httpGet} from 'Services/httpCalls';
import {FetchDataPaged, FetchDataPagedProps} from 'Types/FetchData';

function useFetchPaged<Type>({
  endpoint,
  page, pageSize, config,
}: FetchDataPagedProps): FetchDataPaged<Type> {
  const [data, setData] = useState<Type>();
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [recordCount, setRecordCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(50)
  ;
  useEffect(() => {
    let _alive = true;
    setLoading(true);

    const paramConfig = {
      params: {page, page_size: pageSize ?? currentPageSize},
    };

    httpGet(endpoint, {
      ...config,
      ...paramConfig,
    })
        .then(response => {
          _alive && setData(response.data);
          _alive && setTotalPages(response.headers['x-page-total']);
          _alive && setCurrentPageSize(response.headers['x-page-size']);
          _alive && setRecordCount(response.headers['x-result-count']);
          _alive && setTotalRecords(response.headers['x-result-total']);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    return () => { _alive = false;};
  }, [endpoint, page, pageSize]);

  return {currentPage: page, currentPageSize, recordCount, totalPages, totalRecords, data, loading};
}

export default useFetchPaged;