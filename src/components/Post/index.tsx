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
      <Title>{data.title}</Title>
      <Date>
        {formatDistanceToNow(data.metadata.publishedAt, {
          locale: pt,
        })}
      </Date>
    </Header>
    <Body>{data.body}</Body>
    <Author>{data.author.name}</Author>
  </Container>
);

export default Post;
