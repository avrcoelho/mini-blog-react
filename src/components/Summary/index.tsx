import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import { Publication } from '../../store/ducks/publications/types';

import { Container, Title, List, Item } from './styles';

const Summary: React.FC = () => {
  const {
    data: publications,
  }: { loading: boolean; data: Publication[] } = useSelector(
    (state: ApplicationState) => state.publications,
  );

  return (
    <>
      {publications.length ? (
        <Container>
          <Title>Mais recentes</Title>
          <List>
            {publications.slice(0, 5).map((publication: Publication) => (
              <Item key={publication.title}>{publication.title}</Item>
            ))}
          </List>
        </Container>
      ) : null}
    </>
  );
};

export default Summary;
