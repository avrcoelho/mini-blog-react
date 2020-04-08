import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from '../actions';
import { publications } from '../sagas';
import { Publication } from '../types';

const apiMock = new MockAdapter(api);

describe('Publications Saga', () => {
  const dispatch = jest.fn();

  it('should be able to fetch Publications', async () => {
    const publicationData: Publication[] = [
      {
        title: 'AssCo has revamped the theory of versioning',
        body:
          'W will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.',
        metadata: {
          publishedAt: 1492004832000,
          authorId: 2,
        },
      },
    ];

    apiMock.onGet('v2/5be5e3fa2f000082000fc3f8').reply(200, publicationData);

    await runSaga({ dispatch }, publications).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadSuccess(publicationData));
  });

  it('should fail when api returns error', async () => {
    apiMock.onGet('v2/5be5e3fa2f000082000fc3f8').reply(500);

    await runSaga({ dispatch }, publications).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
  });
});
