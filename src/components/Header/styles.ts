import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #333;
`;

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 992px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
`;
