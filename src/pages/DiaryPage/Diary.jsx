import ConsumeList from '../../components/ConsumeList';
import { SideBar } from 'components/SideBar/SideBar';
import Datetime from 'react-datetime';
import moment from 'moment';
import './diary.css';
import 'react-datetime/css/react-datetime.css';
import { useDispatch, useSelector } from 'react-redux';
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

import {
  WrapPage,
  WrapSideBar,
} from 'pages/CalculatorPage/CalculatorPage.styled';


const Diary = () => {
  const dispatch = useDispatch();
  const consumes = useSelector(state => state.diary.consume);
  const registerDate = useSelector(getSelectedDate);

  //Asigna día actual si no hay un día seleccionado
  if (!registerDate) {
    const actualDate = new Date();
    const currentday = `${actualDate.getDate()}.${actualDate.getMonth() + 1}.
    ${actualDate.getFullYear()}`;
    dispatch(setSelectedDate(currentday));
  }

  //deshabilita los días del calendario, viene de la línea 59
  var today = moment().subtract(1);
  const valid = current => {
    return current.isBefore(today);
  };

  const changeDate = e => {
    dispatch(setSelectedDate(e.format('DD.MM.YYYY')));
  };

  return (

    <>
      <WrapPage>
        <Section>
        <DisplayDate>{registerDate}</DisplayDate>
          <Calendar>
            <Image src={calendar} alt="calendar" />
            <Datetime
               className="rdt"
               inputProps={{ className: 'inputtime' }}
               isValidDate={valid}
               closeOnSelect
               dateFormat="DD-MM-YYYY"
               timeFormat={false}
               value={registerDate}
               onChange={changeDate}
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
        <WrapSideBar>
          <SideBar />
        </WrapSideBar>
      </WrapPage>
      <ConsumeList consumes={consumes} />
    </>

  );
};

export default Diary;
