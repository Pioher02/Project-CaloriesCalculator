import NavBar from '../components/NavBar';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import styled from 'styled-components';

const Date = styled.div`
  font-size: 34px;
  font-weight: 700;
`;

const Diary = () => {
  return (
    <>
      <NavBar />
      <Date>registerDate</Date>
      {/* <Datetime closeOnSelect dateFormat="DD-MM-YYYY" timeFormat={false} hidden /> */}
      <div>
        <form>
          <input
            type="text"
            id="products"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            placeholder="Ingresa el nombre del producto"
            required
          />
          <input type="number" id="grams" placeholder="Gramos" required />
        </form>
        <button>+</button>
      </div>
    </>
  );
};

export default Diary;
