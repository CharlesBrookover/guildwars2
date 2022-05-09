import axios from 'axios';

/**
 * Helper to call asynchronous HTTP call
 * currently uses axios
 *
 * @param url
 * @param config
 */
export async function httpGet(url: string, config?: object): Promise<any> {
  return await axios.get(url, {...config});
}