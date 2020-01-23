import produce from 'immer';

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
  type: 1
},]

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}