import { TEST_DISPATCH } from './types';

const registeruser = userData => ({
  type: TEST_DISPATCH,
  payload: userData,
});

export default registeruser;
