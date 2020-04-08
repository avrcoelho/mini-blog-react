import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';
import * as PublicationsActions from '../../store/ducks/publications/actions';
import * as AuthorsActions from '../../store/ducks/authors/actions';
import { Author } from '../../store/ducks/authors/types';
import { Publication } from '../../store/ducks/publications/types';

import Post from '../Post';

import { Container } from './styles';

const List: React.FC = () => {
  const dispatch = useDispatch();

  const {
    data: publications,
  }: { loading: boolean; data: Publication[] } = useSelector(
    (state: ApplicationState) => state.publications,
  );
  const { data: authors }: { loading: boolean; data: Author[] } = useSelector(
    (state: ApplicationState) => state.authors,
  );

  useEffect(() => {
    dispatch(PublicationsActions.loadRequest());
    dispatch(AuthorsActions.loadRequest());
  }, []);

  const posts = useMemo<any>(
    () =>
      publications.length && authors.length
        ? publications.map((publication: Publication) => ({
            ...publication,
            author: {
              ...authors.find(
                (author: Author) => author.id === publication.metadata.authorId,
              ),
            },
          }))
        : [],
    [],
  );

  return (
    <Container>
      <Post data={posts} />
    </Container>
  );
};

export default List;
