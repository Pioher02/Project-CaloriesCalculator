import { Header } from '../../components/Header/Header';
import ConsumeList from '../../components/ConsumeList';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useSelector } from 'react-redux';
import calendar from '../../images/calendar.svg';

import { Date, Form, Section, ProductInput, GramsInput, Button  } from './DiaryPage.styles';

<Datetime closeOnSelect dateFormat="DD-MM-YYYY" timeFormat={false} />;

const Diary = () => {
  const consumes = useSelector(state => state.diary.consume);

  return (
    <>
      <Header />
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
