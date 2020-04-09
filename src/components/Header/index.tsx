import React from 'react';

import { Container, LogoContainer, Title } from './styles';

const Header: React.FC = () => (
  <Container>
    <LogoContainer>
      <Title>Blog</Title>
    </LogoContainer>
  </Container>
);

export default Header;
