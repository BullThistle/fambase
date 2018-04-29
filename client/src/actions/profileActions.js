import axios from 'axios';

import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './types';

export const setProfileLoading = () => ({
  type: PROFILE_LOADING,
});

export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      }),
    ) // eslint-disable-line
    .catch(() =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      }),
    ); // eslint-disable-line
};

export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE,
});
