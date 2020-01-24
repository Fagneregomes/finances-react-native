
import { takeLatest, put, all } from 'redux-saga/effects';

import { registerSuccess, registerFailure, actionType } from './actions';

export function* getRegisters({ payload }) {
  try {
    const data = [{
      id: 4,
      description: 'Conta de água',
      idCategory: 1,
      date: new Date(Date.now()),
      price: 93,
      type: 1
    }]

    yield put(registerSuccess(data));

  } catch (err) {
    alert('Erro no request getRegisters, ', err)
    yield put(registerFailure());
  }
}

export default all([takeLatest(actionType.REGISTER_REQUEST, getRegisters)]);