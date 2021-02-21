import axios from 'axios';

import store from 'store';

import { removeUser } from 'actions/userActions';

import { getToken, removeToken } from 'utils/token/token';
import toQueryString from 'utils/toQueryString';

import { APP_KEY } from 'constants/creds';
import { SOURCE } from 'constants/miscData';

interface FetchDataLessMethod {
  url: string;
  method?: string;
  query?: {
    [key: string]: string | boolean | number;
  };
  // Use this for testing purpose only
  options?: {
    byPass: boolean;
  };
}

interface FetchMethod extends FetchDataLessMethod {
  data?: any;
}

/**
 *
 * @param FetchMethod fetch api request params
 *
 * @returns fetch api Promise object
 */
const fetchFn = async ({
  url,
  method,
  data,
  query,
}: FetchMethod): Promise<any> => {
  const newUrl = `${url}${toQueryString(query)}`;
  const token = await getToken();

  let headers: Record<string, any> = {
    key: APP_KEY,
    source: SOURCE,
    // if user token exists
    ...(token && { token }),
  };

  try {
    const response = await axios({
      url: newUrl,
      method,
      headers,
      ...(data && { data }),
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      // handle unauthorized
      if (error.response.status === 401 || error.response.status === 403) {
        removeToken();
        store.dispatch(removeUser());
        throw new Error('Unauthorized');
      } else {
        throw error.response.data;
      }
    } else {
      throw error;
    }
  }
};

/**
 * Fetch wrapper for GET method
 *
 * @param FetchDataLessMethod
 *
 * @returns fetch api Promise object
 */
export const fetchGet = ({ url, query, options }: FetchDataLessMethod) =>
  fetchFn({ method: 'get', url, query, options });

/**
 * Fetch wrapper for POST method
 *
 * @param FetchMethod
 *
 * @returns fetch api Promise object
 */
export const fetchPost = ({ url, data, query, options }: FetchMethod) =>
  fetchFn({ method: 'post', url, data, query, options });

/**
 * Fetch wrapper for PUT method
 *
 * @param FetchMethod
 *
 * @returns fetch api Promise object
 */
export const fetchPut = ({ url, data, query, options }: FetchMethod) =>
  fetchFn({ method: 'put', url, data, query, options });

/**
 * Fetch wrapper for DELETE method
 *
 * @param FetchMethod
 *
 * @returns fetch api Promise object
 *
 */
export const fetchDelete = ({ url, data, query, options }: FetchMethod) =>
  fetchFn({ method: 'delete', url, data, query, options });

export default fetchFn;
