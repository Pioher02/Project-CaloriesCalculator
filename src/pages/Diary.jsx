import NavBar from '../components/NavBar';
import ConsumeList from '../components/ConsumeList';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import calendar from '../images/calendar.svg';

const Date = styled.div`
  font-size: 34px;
  font-weight: 700;
  margin: 100px 15px 0px;
`;

const Form = styled.form`
  display: flex;
  margin-top: 50px;
`;

const Section = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ProductInput = styled.textarea`
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

const GramsInput = styled.input`
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

const Button = styled.button`
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

<Datetime closeOnSelect dateFormat="DD-MM-YYYY" timeFormat={false} />

const Diary = () => {
  const consumes = useSelector(state => state.diary.consume);

  return (
    <>
      <NavBar />
      <Section>
        <Date>13.08.2023</Date>
        <img src={calendar} alt="calendar" />
        
      </Section>

      <Form>
        <ProductInput
          type="text"
          id="products"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          placeholder="Ingresa el nombre del producto"
          required
        />
        <GramsInput type="number" id="grams" placeholder="Gramos" required />
        <Button>+</Button>
      </Form>
      <ConsumeList consumes={consumes} />
    </>
  );
};

export default Diary;
