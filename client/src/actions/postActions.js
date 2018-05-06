/* eslint-disable import/prefer-default-export */
/* eslint-disable function-paren-newline */
import axios from 'axios';

import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  DELTETE_POST,
  GET_POST,
  CLEAR_ERRORS,
  ADD_COMMENT,
} from './types';

export const setPostLoading = () => ({
  type: POST_LOADING,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
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

export const addComment = (postId, commentData) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post(`/api/posts/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: ADD_COMMENT,
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

export const getPost = id => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      }),
    )
    .catch(() =>
      dispatch({
        type: GET_POST,
        payload: null,
      }),
    );
};
