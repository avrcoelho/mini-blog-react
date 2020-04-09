import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Header, Title, Date, Body, Author } from './styles';

import { Post } from '../List';

type Prop = {
  data: Post;
};

const Post: React.FC<Prop> = ({ data }) => (
  <Container>
    <Header>
      <Title data-testid="title-post">{data.title}</Title>
      <Date data-testid="date-post">
        {formatDistanceToNow(data.metadata.publishedAt, {
          locale: pt,
        })}
      </Date>
    </Header>
    <Body data-testid="body-post">{data.body}</Body>
    <Author data-testid="author-post">{data.author.name}</Author>
  </Container>
);

export default Post;
