import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

export const PostList = styled.ul`
  width: 100%;
  max-width: 760px;
  list-style: none;
  margin-top: 20px;
`;

export const SelectContainer = styled.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;

  label {
    color: #999;
    font-size: 12px;
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 400px;
  height: 36px;
  color: #333;
  font-size: 14px;
`;
