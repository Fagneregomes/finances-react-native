import produce from 'immer';

const INITIAL_STATE = [{
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