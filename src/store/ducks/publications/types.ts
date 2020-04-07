export enum PublicationsTypes {
  LOAD_REQUEST = '@publications/LOAD_REQUEST',
  LOAD_SUCCESS = '@publications/LOAD_SUCCESS',
  LOAD_FAILURE = '@publications/LOAD_FAILURE',
}

export interface Publication {
  title: string;
  body: string;
  metadata: {
    publishedAt: number;
    authorId: number;
  };
}

export interface PublicationsState {
  readonly data: Publication[];
  readonly loading: boolean;
  readonly error: boolean;
}
