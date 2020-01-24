import produce from 'immer'
import { actionType } from './actions'

const INITIAL_STATE = {
  isLoading: false,
  data: [{
    id: 1,
    description: 'Residencia',
    icon: 'home',
    color: 'green'
  },
  {
    id: 2,
    description: 'Transporte',
    icon: 'car',
    color: 'red'
  }]
}

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionType.CATEGORIES_REQUEST: {
        draft.isLoading = true;
        break;
      }
      case actionType.CATEGORIES_SUCCESS: {
        draft.data = action.payload.data;
        draft.isLoading = false;
        break;
      }
      case actionType.CATEGORIES_FAILURE: {
        draft.data = [];
        draft.isLoading = false;
        break;
      }
      default:
    }
  });
}