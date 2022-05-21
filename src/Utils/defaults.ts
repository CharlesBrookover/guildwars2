import {AxiosRequestConfig} from 'axios';

export const defaultAxiosConfig: AxiosRequestConfig = {
  baseURL: 'https://api.guildwars2.com/v2/',
  headers: {
    'X-Schema-Version': '2022-05-21T00:00:00',
    'Accept-Language': 'en',
  }
};