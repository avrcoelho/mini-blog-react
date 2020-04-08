export enum AuthorsTypes {
  LOAD_REQUEST = '@authors/LOAD_REQUEST',
  LOAD_SUCCESS = '@authors/LOAD_SUCCESS',
  LOAD_FAILURE = '@authors/LOAD_FAILURE',
}

export interface Author {
  id: number;
  name: string;
}

export interface AuthorsState {
  readonly data: Author[];
  readonly loading: boolean;
  readonly error: boolean;
}
