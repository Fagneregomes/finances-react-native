import { all } from 'redux-saga/effects';

import registers from './registers/sagas';

export default function* rootSaga() {
  return yield all([registers]);
}