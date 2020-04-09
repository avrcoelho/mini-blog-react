import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as PublicationsActions from '../../store/ducks/publications/actions';
import * as AuthorsActions from '../../store/ducks/authors/actions';

import Summary from '../../components/Summary';
import List from '../../components/List';

import { Container, Components } from './styles';

const Posts: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PublicationsActions.loadRequest());
    dispatch(AuthorsActions.loadRequest());
  }, [dispatch]);

  return (
    <Container>
      <Components>
        <Summary />
        <List />
      </Components>
    </Container>
  );
};

export default Posts;
