/**
 * Action types
 */
export const actionType = {
  CATEGORIES_REQUEST: '@categories/REQUEST',
  CATEGORIES_SUCCESS: '@categories/SUCCESS',
  CATEGORIES_FAILURE: '@categories/FAILURE',
}

export function categoriesRequest() {
  return {
    type: actionType.CATEGORIES_REQUEST,
  };
}

export function categoriesSuccess(data) {
  return {
    type: actionType.CATEGORIES_SUCCESS,
    payload: { data },
  };
}

export function categoriesFailure() {
  return {
    type: actionType.CATEGORIES_FAILURE,
  };
}