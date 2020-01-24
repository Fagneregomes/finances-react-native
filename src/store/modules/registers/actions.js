/**
 * Action types
 */
export const actionType = {
  REGISTER_REQUEST: '@registers/REQUEST',
  REGISTER_SUCCESS: '@registers/SUCCESS',
  REGISTER_FAILURE: '@registers/FAILURE',
}


export function registerRequest(expenseType) {
  return {
    type: actionType.REGISTER_REQUEST,
    payload: expenseType,
  };
}

export function registerSuccess(payload) {
  return {
    type: actionType.REGISTER_SUCCESS,
    payload,
  };
}

export function registerFailure() {
  return {
    type: actionType.REGISTER_FAILURE,
  };
}