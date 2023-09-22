import styled from 'styled-components';

export const DisplayDate = styled.div`
  font-size: 34px;
  font-weight: 700;
  margin: -12px 15px 0px 60px;
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
  margin-left: -610px;
`;

export const Section = styled.div`
  display: flex;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1008px) {
    flex-direction: row;
  }
`;

export const Leftsection = styled.div`
  display: flex;
  flex-direction: column;
  width: 63%;
`;

export const Rightsection = styled.div`
  position: relative;
  width: 37%;
  height: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1008px) {
    flex-direction: row;
  }
`;

export const Leftsection = styled.div`
  display: flex;
  flex-direction: column;
  width: 63%;
`;

export const Rightsection = styled.div`
  position: relative;
  width: 37%;
  height: 100%;
`;

export const ProductInput = styled.textarea`
  font-size: 14px;
  font-weight: 700;
  font-family: verdana;
  width: 240px;
  height: 37px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0px 0px 12px;
  margin-left: 15px;
  resize: none;
`;

export const GramsInput = styled.input`
  font-size: 14px;
  font-weight: 700;
  font-family: verdana;
  width: 107px;
  height: 37px;
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
`;
