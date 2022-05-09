import {AxiosRequestConfig} from 'axios';

interface FetchDataProps {
  endpoint: string,
  config?: AxiosRequestConfig,
}

interface FetchDataSingleProps extends FetchDataProps {
  id: number;
}

interface FetchDataMultipleProps extends FetchDataProps {
  ids: Array<number>;
}

interface FetchDataPagedProps extends FetchDataProps {
  page: number,
  pageSize?: number
}

interface FetchData<Type> {
  data: Type | undefined,
  loading: boolean
}

interface FetchDataPaged<Type> extends FetchData<Type> {
  currentPageSize: number,
  totalPages: number,
  recordCount: number,
  totalRecords: number,
  currentPage: number
}