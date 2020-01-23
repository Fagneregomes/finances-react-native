/**
 * Action types
 */
export default {
  REGISTER_REQUEST = '@registers/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@registers/REGISTER_SUCCESS',
  REGISTER_FAILURE = '@Repositories/REGISTER_FAILURE',
}


export function registerRequest(data) {
  return {
    type: REGISTER_REQUEST,
    payload: { data },
  };
}

export function registerSuccess(data) {
  return {
    type: REGISTER_SUCCESS,
    payload: { data },
  };
}

export function registerFailure() {
  return {
    type: REGISTER_FAILURE,
  };
}