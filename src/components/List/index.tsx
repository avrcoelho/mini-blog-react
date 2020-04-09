import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import { Author } from '../../store/ducks/authors/types';
import { Publication } from '../../store/ducks/publications/types';

import Post from '../Post';

import {
  Container,
  PostList,
  Options,
  SelectContainer,
  Select,
} from './styles';

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
  const [authorSelected, setAuthorSelected] = useState<string>('');
  const [order, setOrder] = useState<string>('recent');

  const {
    data: publications,
  }: { loading: boolean; data: Publication[] } = useSelector(
    (state: ApplicationState) => state.publications,
  );
  const { data: authors }: { loading: boolean; data: Author[] } = useSelector(
    (state: ApplicationState) => state.authors,
  );
  const posts = useMemo<any>(
    () =>
      publications.length && authors.length
        ? (authorSelected
            ? publications.filter(
                (post: Publication) =>
                  post.metadata.authorId === Number(authorSelected),
              )
            : publications
          )
            .sort((a: Publication, b: Publication) =>
              order === 'old'
                ? a.metadata.publishedAt - b.metadata.publishedAt
                : b.metadata.publishedAt - a.metadata.publishedAt,
            )
            .map((publication: Publication) => ({
              ...publication,
              author: {
                ...authors.find(
                  (author: Author) =>
                    author.id === publication.metadata.authorId,
                ),
              },
            }))
        : [],
    [publications, authors, authorSelected, order],
  );

  return (
    <Container>
      {authors.length ? (
        <Options>
          <SelectContainer width={200}>
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
          <SelectContainer width={120}>
            <label>Ordenar</label>
            <Select
              value={order}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setOrder(e.target.value)
              }
              data-testid="select-order">
              <option value="recent">Mais recentes</option>
              <option value="old">Mais antigos</option>
            </Select>
          </SelectContainer>
        </Options>
      ) : null}
      <PostList data-testid="list-posts">
        {posts.map((post: Post) => (
          <Post key={post.title} data={post} />
        ))}
      </PostList>
    </Container>
  );
};

export default List;
