import { action } from 'typesafe-actions';
import { AuthorsTypes, Author } from './types';

export const loadRequest = () => action(AuthorsTypes.LOAD_REQUEST);
export const loadSuccess = (data: Author[]) =>
  action(AuthorsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(AuthorsTypes.LOAD_FAILURE);
