import { action } from 'typesafe-actions';
import { PublicationsTypes, Publication } from './types';

export const loadRequest = () => action(PublicationsTypes.LOAD_REQUEST);
export const loadSuccess = (data: Publication[]) =>
  action(PublicationsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(PublicationsTypes.LOAD_FAILURE);
