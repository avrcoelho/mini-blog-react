import styled from 'styled-components';

type Props = {
  width?: number;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

export const PostList = styled.ul`
  flex: 1;
  list-style: none;
  margin-top: 20px;
`;

export const Options = styled.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const SelectContainer = styled.div`
  width: 100%;
  max-width: ${(props: Props) => `${props.width}px`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;

  label {
    color: #999;
    font-size: 12px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 36px;
  color: #333;
  font-size: 14px;
`;
