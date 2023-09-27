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
  getProductsAllows,
  keepConsumeProducts,
  getConsumes,
} from 'redux/products/operations';
import {
  selectConsumeProducts,
  selectProductsList,
} from 'redux/products/selectors';

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
  Ul,
} from './DiaryPage.styled';

import {
  WrapPage,
  WrapSideBar,
} from 'pages/CalculatorPage/CalculatorPage.styled';

import { setSelectedDate } from 'redux/date/slice';
import { useState } from 'react';
import { selectCalculateValue } from 'redux/calculate/selectors';
import { addProducts } from 'redux/products/slice';
import { selectToken } from 'redux/auth/selectors';

const Diary = () => {
  const dispatch = useDispatch();
  const registerDate = useSelector(getSelectedDate);
  const consumeProducts = useSelector(selectConsumeProducts);
  let token = useSelector(selectToken);
  const [productName, setProductName] = useState();
  const [bloodTypeRecent, setbloodTypeRecent] = useState(); //Estado para evitar bucle
  const [showList, setShowList] = useState(); //Estado para mostrar productos permitidos

  const userData = useSelector(selectCalculateValue);
  const bloodType = userData.formData.bloodType;

  //Obtiene los productos permitidos
  if (bloodType !== bloodTypeRecent) {
    dispatch(getProductsAllows(bloodType));
    setbloodTypeRecent(bloodType);
  }
  const productsList = useSelector(selectProductsList);

  //Asigna día actual si no hay un día seleccionado
  const actualDate = new Date();

  let day = '';
  if (actualDate.getDate() < 10) {
    day = `0${actualDate.getDate()}`;
  } else {
    day = `${actualDate.getDate()}`;
  }

  let month = '';
  if (actualDate.getMonth() < 9) {
    month = `0${1 + actualDate.getMonth()}`;
  } else {
    month = `${1 + actualDate.getMonth()}`;
  }

  const currentday = `${day}.${month}.${actualDate.getFullYear()}`;

  if (!registerDate) {
    dispatch(setSelectedDate(currentday));
  }

  //deshabilita los días del calendario
  var today = moment().subtract(1);
  const valid = current => {
    return current.isBefore(today);
  };

  //Asigna día al seleccionado en el calendario
  const changeDate = e => {
    dispatch(setSelectedDate(e.format('DD.MM.YYYY')));
  };

  //Obtiene los productos que consumio
  const saveProduct = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const producSelected = productsList.find(
      product => product.title === productName
    );

    const product = {
      productConsume: producSelected.title,
      grams: form.elements.grams.value,
      calories: producSelected.calories,
    };

    keepConsume(product); //funcion que va a guardar la info

    form.reset();
    setProductName('');
  };

  //Guarda los consumos del día
  const keepConsume = consumeList => {
    const dataForDispatch = {
      date: registerDate,
      products: [...consumeProducts.products, consumeList],
    };
    dispatch(addProducts(dataForDispatch)); // Guarda en local

    dispatch(
      keepConsumeProducts({ dataForDispatch, token }) //Guarda en BD
    );
  };

  //Obtiene los consumos del día
  if (registerDate !== currentday) {
    dispatch(
      getConsumes({ registerDate, token }) //obtiene los consumos de la BD
    );
  }

  return (
    <>
      <WrapPage>
        <div style={{ marginBottom: '100px' }}>
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

          <Form onSubmit={saveProduct}>
            <ProductInput
              name="product"
              id="products"
              placeholder="Ingresa el nombre del producto"
              onChange={ev => {
                setProductName(ev.target.value);
                setShowList(true);
              }}
              value={productName}
              required
            />
            <GramsInput
              type="number"
              id="grams"
              name="grams"
              placeholder="Gramos"
              required
            />
            <Button type="submit" disabled={registerDate !== currentday}>
              +
            </Button>
            
          </Form>
          {showList && productName ? (
            <Ul>
              {productsList
                .filter(product =>
                  product.title
                    .toLocaleLowerCase()
                    .includes(productName.toLocaleLowerCase())
                )
                .map(product => {
                  return (
                    <List
                      key={product._id}
                      onClick={() => {
                        setProductName(product.title);
                        setShowList(false);
                      }}
                    >
                      {product.title}
                    </List>
                  );
                })}
            </Ul>
          ) : (
            ''
          )}
          <ConsumeList consumes={consumeProducts.products} />
        </div>
        <WrapSideBar>
          <SideBar />
        </WrapSideBar>
      </WrapPage>
    </>
  );
};

export default Diary;
