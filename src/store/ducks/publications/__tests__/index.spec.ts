import reducer, { INITIAL_STATE } from '../';
import * as PublicationsActions from '../actions';
import { Publication } from '../types';

describe('Characters reducer', () => {
  it('DEFAULT', () => {
    const action = {
      type: undefined,
    };
    const state = reducer(undefined, action);

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('LOAD_REQUEST', () => {
    const state = reducer(INITIAL_STATE, PublicationsActions.loadRequest());

    expect(state).toStrictEqual({ ...INITIAL_STATE, loading: true });
  });

  it('LOAD_SUCCESS', () => {
    const publicationData: Publication[] = [
      {
        title: 'AssCo has revamped the theory of versioning',
        body:
          'We will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.',
        metadata: {
          publishedAt: 1492004832000,
          authorId: 2,
        },
      },
    ];

    const state = reducer(
      INITIAL_STATE,
      PublicationsActions.loadSuccess(publicationData),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      data: publicationData,
    });
  });

  it('LOAD_FAILURE', () => {
    const state = reducer(INITIAL_STATE, PublicationsActions.loadFailure());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      error: true,
    });
  });
});
