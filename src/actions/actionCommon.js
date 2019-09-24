import axios from 'axios';

export const SET_LOADING = 'SET_LOADING';
export const setLoading = isLoading => {
  return { type: SET_LOADING, isLoading };
};

// fetch 공통
export const fetch = (method, url, params, callback) => {
  return dispatch => {
    dispatch(setLoading(true));

    axios({
      method: method,
      url: url,
      data: params,
    })
      .then(resp => {
        if (resp.status >= 200 && resp.status < 400) {
          dispatch(callback(resp.data));
        } else {
        }
        dispatch(setLoading(false));
      })
      .catch(err => {
        dispatch(setLoading(false));
      });
  };
};
