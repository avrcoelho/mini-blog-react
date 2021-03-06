import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { Publication } from './types';

export function* publications(): SagaIterator {
  try {
    const { data }: { data: Publication[] } = yield call(
      api.get,
      'v2/5be5e3fa2f000082000fc3f8',
    );

    yield put(loadSuccess(data));
  } catch (err) {
    yield put(loadFailure());
  }
}
