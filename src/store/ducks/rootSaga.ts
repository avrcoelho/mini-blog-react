import { all, takeLatest } from 'redux-saga/effects';

import { PublicationsTypes } from './publications/types';

import { publications } from './publications/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(PublicationsTypes.LOAD_REQUEST, publications)]);
}
