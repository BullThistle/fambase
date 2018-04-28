import TEST_DISPATCH from './types';

export const registeruser = userData => ({
  type: TEST_DISPATCH,
  payload: userData,
});

export const loginUser = userData => ({
  type: TEST_DISPATCH,
  payload: userData,
});
