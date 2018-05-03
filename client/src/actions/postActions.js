/* eslint-disable import/prefer-default-export */
/* eslint-disable function-paren-newline */
import axios from 'axios';

import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  DELTETE_POST,
} from './types';

export const setPostLoading = () => ({
  type: POST_LOADING,
});

export const addPost = postData => (dispatch) => {
  axios
    .post('/api/posts', postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

export const getPosts = () => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get('/api/posts')
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      }),
    )
    .catch(() =>
      dispatch({
        type: GET_POSTS,
        payload: null,
      }),
    );
};

export const deletePost = id => (dispatch) => {
  axios
    .delete(`/api/posts/${id}`)
    .then(() =>
      dispatch({
        type: DELTETE_POST,
        payload: id,
      }),
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};
