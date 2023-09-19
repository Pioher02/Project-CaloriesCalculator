import { Header } from '../../components/Header/Header';
import ConsumeList from '../../components/ConsumeList';
import Datetime from 'react-datetime';
import './diary.css';
import 'react-datetime/css/react-datetime.css';
import { useSelector } from 'react-redux';
import calendar from '../../images/calendar.svg';
import { getSelectedDate } from 'redux/date/selectors';

import {
  DisplayDate,
  Form,
  Section,
  ProductInput,
  GramsInput,
  Button,
  Calendar,
  Image,
} from './DiaryPage.styles';

const Diary = () => {
  const consumes = useSelector(state => state.diary.consume);
  const registerDate = useSelector(getSelectedDate);

  const actualDate = new Date();

  return (
    <>
      <Header />
      <Section>
        {registerDate ? (
          <DisplayDate>{registerDate}</DisplayDate>
        ) : (
          <DisplayDate>
            {actualDate.getDate()}.{actualDate.getMonth() + 1}.
            {actualDate.getFullYear()}
          </DisplayDate>
        )}
        <Calendar>
          <Image src={calendar} alt="calendar" />
          <Datetime
            className="rdt"
            inputProps={{ className: 'inputtime' }}
            closeOnSelect
            dateFormat="DD-MM-YYYY"
            timeFormat={false}
          />
        </Calendar>
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
