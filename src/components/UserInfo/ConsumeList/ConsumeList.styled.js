import styled from 'styled-components';

export const Text = styled.p`
  margin-top: 50px;
  @media (max-width: 1279px) {
    margin-left: 50px;
  }
`;
export const Table = styled.table`
  margin-top: 10px;
  font-size: 14px;
  
  @media (max-width: 1279px) {
    margin-left: 50px;
  }
`;

export const FirstRow = styled.td`
  border-bottom: 1px solid rgb(224, 224, 224);
  width: 240px;
`;

export const Row = styled.td`
  border-bottom: 1px solid rgb(224, 224, 224);
  text-align: end;
  width: 100px;

  @media (max-width: 767px) {
    width: 80px;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #9b9faa;
  cursor: pointer;
`;