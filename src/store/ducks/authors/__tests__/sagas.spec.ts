import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from '../actions';
import { authors } from '../sagas';
import { Author } from '../types';

const apiMock = new MockAdapter(api);

describe('Authors Saga', () => {
  const dispatch = jest.fn();

  it('should be able to fetch Authors', async () => {
    const authorData: Author[] = [
      {
        name: 'Jemma Chadwick',
        id: 1,
      },
      {
        name: 'Nicholas Jordan',
        id: 2,
      },
      {
        name: 'Zinnia Rickard',
        id: 3,
      },
      {
        name: 'Sophie Hawk',
        id: 4,
      },
    ];

    apiMock.onGet('v2/5be5e3ae2f00005b000fc3f6').reply(200, authorData);

    await runSaga({ dispatch }, authors).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadSuccess(authorData));
  });

  it('should fail when api returns error', async () => {
    apiMock.onGet('v2/5be5e3ae2f00005b000fc3f6').reply(500);

    await runSaga({ dispatch }, authors).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
  });
});
