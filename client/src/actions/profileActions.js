import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_PROFILES,
} from './types';

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

export const addEvent = (eventData, history) => (dispatch) => {
  axios
    .post('/api/profile/event', eventData)
    .then(() => history.push('/'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    ); // eslint-disable-line
};

export const deleteEvent = id => (dispatch) => {
  axios
    .delete(`/api/profile/event/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      }),
    ) // eslint-disable-line
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    ); // eslint-disable-line
};

export const deleteAccount = () => (dispatch) => {
  if (window.confirm('Are you sure? This can not be undone.')) {
    axios
      .delete('/api/profile')
      .then(() =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        }),
      ) // eslint-disable-line
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        }),
      ); // eslint-disable-line
  }
};

export const getProfiles = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile/all')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      }),
    ) // eslint-disable-line
    .catch(() =>
      dispatch({
        type: GET_PROFILES,
        payload: null,
      }),
    ); // eslint-disable-line
};

export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post('/api/profile', profileData)
    .then(() => history.push('/'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    ); // eslint-disable-line
};
