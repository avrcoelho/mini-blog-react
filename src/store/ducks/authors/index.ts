import { Reducer } from 'redux';
import { AuthorsState, AuthorsTypes } from './types';

export const INITIAL_STATE: AuthorsState = {
  data: [],
  error: false,
  loading: true,
};

const reducer: Reducer<AuthorsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthorsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case AuthorsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case AuthorsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
