import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import { PublicationsTypes } from './publications/types';
import { AuthorsTypes } from './authors/types';

import { publications } from './publications/sagas';
import { authors } from './authors/sagas';

export default function* rootSaga(): SagaIterator {
  return yield all([
    takeLatest(PublicationsTypes.LOAD_REQUEST, publications),
    takeLatest(AuthorsTypes.LOAD_REQUEST, authors),
  ]);
}
