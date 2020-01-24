import produce from 'immer';
import { actionType } from './actions'

const INITIAL_STATE = [{
  id: 1,
  description: 'Conta de Luz',
  idCategory: 1,
  date: new Date(Date.now()),
  price: 200,
  type: 0
}, {
  id: 2,
  description: 'Gasolina Viagem',
  idCategory: 2,
  date: new Date(Date.now()),
  price: 250.93,
  type: 0
}, {
  id: 3,
  description: 'Conta de água',
  idCategory: 1,
  date: new Date(Date.now()),
  price: 100,
  type: 0
}]

export default function registers(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionType.REGISTER_REQUEST: {
        draft.isLoading = true
        break;
      }
      case actionType.REGISTER_SUCCESS: {
        draft.isLoading = false;
        draft.data = [...draft.data, ...action.payload]
        break;
      }
      case actionType.REGISTER_FAILURE: {
        draft.isLoading = false
        draft.data = []
        break;
      }
      default:
    }
  });
}