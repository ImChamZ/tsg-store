import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAppError, setAppLoading } from '../../store/reducers/appSlice';
import axiosClient from '../../service/axios';

export function useFetch<T>(url: string) {
  const dispatch = useDispatch();
  const [data, setData] = useState<T>({} as T | [] as T);

  useEffect(() => {
    dispatch(setAppLoading(true));

    axiosClient
      .get(url)
      .then((response) => {
        if (response?.data?.message) {
          dispatch(setAppError(true));
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
