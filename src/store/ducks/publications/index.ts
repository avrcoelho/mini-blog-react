import { Reducer } from 'redux';
import { PublicationsState, PublicationsTypes } from './types';

export const INITIAL_STATE: PublicationsState = {
  data: [],
  error: false,
  loading: true,
};

const reducer: Reducer<PublicationsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PublicationsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case PublicationsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case PublicationsTypes.LOAD_FAILURE:
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
