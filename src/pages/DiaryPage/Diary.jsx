import ConsumeList from '../../components/ConsumeList';
import { SideBar } from 'components/SideBar/SideBar';
import Datetime from 'react-datetime';
import moment from 'moment';
import './diary.css';
import 'react-datetime/css/react-datetime.css';
import { useDispatch, useSelector } from 'react-redux';
import calendar from '../../images/calendar.svg';
import { getSelectedDate } from 'redux/date/selectors';
import { getProductsAllows } from 'redux/products/operations';
import { selectProductsList } from 'redux/products/selectors';

import {
  DisplayDate,
  Form,
  Section,
  ProductInput,
  GramsInput,
  Button,
  Calendar,
  Image,
  List,
} from './DiaryPage.styled';

import {
  WrapPage,
  WrapSideBar,
} from 'pages/CalculatorPage/CalculatorPage.styled';

import { setSelectedDate } from 'redux/date/slice';
import { useState } from 'react';
import { selectCalculateValue } from 'redux/calculate/selectors';

const Diary = () => {
  const dispatch = useDispatch();
  const consumes = useSelector(state => state.diary.consume);
  const registerDate = useSelector(getSelectedDate);
  const [productName, setProductName] = useState();
  const [bloodTypeRecent, setbloodTypeRecent] = useState(); //Estado para evitar bucle
  const [showList, setShowList] = useState(); //Estado para mostrar productos permitidos
  
  const userData = useSelector(selectCalculateValue);
  const bloodType = userData.formData.bloodType;

  if (bloodType !== bloodTypeRecent) {
    dispatch(getProductsAllows(bloodType));
    setbloodTypeRecent(bloodType);
  }
  const productsList = useSelector(selectProductsList);
  console.log(productsList);

  //Asigna día actual si no hay un día seleccionado
  if (!registerDate) {
    const actualDate = new Date();
    const currentday = `${actualDate.getDate()}.${actualDate.getMonth() + 1}.
    ${actualDate.getFullYear()}`;
    dispatch(setSelectedDate(currentday));
  }

  //deshabilita los días del calendario
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
            name="text"
            id="products"
            placeholder="Ingresa el nombre del producto"
            onChange={ev => {
              setProductName(ev.target.value);
              setShowList(true);
            }}
            value={productName}
            required
          />
          <GramsInput type="number" id="grams" placeholder="Gramos" required />
          <Button>+</Button>

          {showList && productName ? (
            <ul>
              {productsList
                .filter(product =>
                  product.title
                    .toLocaleLowerCase()
                    .includes(productName.toLocaleLowerCase())
                )
                .map(product => {
                  return <List key={product._id} onClick={()=> {setProductName(product.title); setShowList(false);}}>{product.title}</List>;
                })}
            </ul>
          ) : (
            ''
          )}
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
