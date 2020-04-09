import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';
import * as PublicationsActions from '../../store/ducks/publications/actions';
import * as AuthorsActions from '../../store/ducks/authors/actions';
import { Author } from '../../store/ducks/authors/types';
import { Publication } from '../../store/ducks/publications/types';

import Post from '../Post';

import { Container, PostList, SelectContainer, Select } from './styles';

export type Post = {
  title: string;
  body: string;
  metadata: {
    publishedAt: number;
  };
  author: {
    id: number;
    name: string;
  };
};

const List: React.FC = () => {
  const dispatch = useDispatch();
  const [authorSelected, setAuthorSelected] = useState<string>('');

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
  }, [dispatch]);

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
    [publications, authors],
  );

  return (
    <Container>
      {authors.length ? (
        <SelectContainer>
          <label>Filtrar por author</label>
          <Select
            value={authorSelected}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setAuthorSelected(e.target.value)
            }
            data-testid="select-author">
            <option value="">Todos</option>
            {authors.map((author: Author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </Select>
        </SelectContainer>
      ) : null}
      <PostList>
        {(authorSelected
          ? posts.filter(
              (post: Post) => post.author.id === Number(authorSelected),
            )
          : posts
        ).map((post: Post) => (
          <Post key={post.title} data={post} />
        ))}
      </PostList>
    </Container>
  );
};

export default List;
