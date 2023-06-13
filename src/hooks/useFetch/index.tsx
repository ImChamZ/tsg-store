import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadingError } from '../../store/reducers/productSlice';
import { setAppError, setAppLoading } from '../../store/reducers/appSlice';
const axios = require('axios');

export function useFetch<T>(url: string) {
  const [data, setData] = useState({} as T | [] as T);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppLoading(true));

    axios
      .get(url)
      .then((response) => {
        if (response?.data?.message) {
          dispatch(loadingError(true));
        } else {
          setData(response.data);
        }
      })
      .catch((error) => {
        dispatch(setAppError(error));
      })
      .finally(() => {
        dispatch(setAppLoading(false));
      });
  }, [dispatch, url]);

  return {
    data,
  };
}
