import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { Author } from './types';

export function* authors(): SagaIterator {
  try {
    const { data }: { data: Author[] } = yield call(
      api.get,
      'v2/5be5e3ae2f00005b000fc3f6',
    );

    yield put(loadSuccess(data));
  } catch (err) {
    yield put(loadFailure());
  }
}
