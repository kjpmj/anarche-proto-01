import axios from 'axios';

// fetch 공통
export const fetch = (method, url, params, callback) => {
  return dispatch => {
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
      })
      .catch(err => {});
  };
};
