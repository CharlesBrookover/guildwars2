import {AxiosRequestConfig} from 'axios';

interface FetchDataProps {
  endpoint: string,
  config?: AxiosRequestConfig,
}


interface FetchDataMultipleProps extends FetchDataProps {
  ids: Array<number>;
}

interface FetchDataPagedProps extends FetchDataProps {
  page: number,
  pageSize?: number
}
/* Props */
interface FetchProps {
  endpoint: string
}
interface FetchSingleProps extends FetchProps {
  id?: number | string,
  auth?: string
}


/* Outputs */
interface FetchData<Type> {
  data: Type | undefined,
  loading: boolean,
  error: string,
  message: string
}

interface FetchDataPaged<Type> extends FetchData<Type> {
  currentPageSize: number,
  totalPages: number,
  recordCount: number,
  totalRecords: number,
  currentPage: number
}

interface ApiDataOut {
  data: object,
  loading: boolean,
  setEndpoint: Dispatch<SetStateAction<string>>,
  setConfig: Dispatch<SetStateAction<AxiosRequestConfig>>,
  error: string,
  message: string
}

