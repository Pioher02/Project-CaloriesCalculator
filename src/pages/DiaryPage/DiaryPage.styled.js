import styled from 'styled-components';

export const DisplayDate = styled.div`
  font-size: 34px;
  font-weight: 700;
`;

export const Calendar = styled.div`
  position: relative;
`;

export const Image = styled.img`
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 50px;

  @media (max-width: 1279px) {
    margin-left: 50px;
    margin-bottom: 30px;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;

  @media (max-width: 1279px) {
    margin-left: 50px;
  }
`;

export const ProductInput = styled.input`
  font-size: 14px;
  font-weight: 700;
  font-family: verdana;
  width: 240px;
  height: 47px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0px 0px 12px;
  margin-left: 15px;
  text-wrap: wrap;
`;

export const GramsInput = styled.input`
  font-size: 14px;
  font-weight: 700;
  font-family: verdana;
  width: 107px;
  height: 47px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0px 0px 12px;
  margin-left: 51px;
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background-color: #fc842d;
  margin-left: 58px;
  color: white;
  font-size: 30px;
  box-shadow: 0px 4px 10px 0px #fc842d;
  cursor:pointer;

  &:disabled {
    background-color: #ffb37c;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    position: absolute;
    top: 33%;
    left: 35%;
  }
`;
export const List = styled.li`
  padding: 5px 0px;
  border-bottom: 1px solid rgb(224, 224, 224);
  cursor: pointer;
  transition: background-color 0.5s ease 0s;
`;

export const Ul = styled.ul`
@media (max-width: 1279px) {
  margin-left: 50px;
}
`;
