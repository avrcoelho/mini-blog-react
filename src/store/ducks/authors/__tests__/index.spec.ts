import reducer, { INITIAL_STATE } from '../';
import * as AuthorsActions from '../actions';
import { Author } from '../types';

describe('Authors reducer', () => {
  it('DEFAULT', () => {
    const action = {
      type: undefined,
    };
    const state = reducer(undefined, action);

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('LOAD_REQUEST', () => {
    const state = reducer(INITIAL_STATE, AuthorsActions.loadRequest());

    expect(state).toStrictEqual({ ...INITIAL_STATE, loading: true });
  });

  it('LOAD_SUCCESS', () => {
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

    const state = reducer(
      INITIAL_STATE,
      AuthorsActions.loadSuccess(authorData),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      data: authorData,
    });
  });

  it('LOAD_FAILURE', () => {
    const state = reducer(INITIAL_STATE, AuthorsActions.loadFailure());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      error: true,
    });
  });
});
