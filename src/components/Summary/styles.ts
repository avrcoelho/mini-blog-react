import styled from 'styled-components';

export const Container = styled.div`
  width: 180px;
  padding: 10px;
  margin-right: 10px;
  margin-top: 77px;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const Title = styled.h3`
  color: #333;
  font-size: 12px;
  text-decoration: underline;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 12px;
  color: #333;
  font-size: 12px;
`;
