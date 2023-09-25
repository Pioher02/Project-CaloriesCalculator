import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from 'redux/auth/operations';
import { selectToken, selectUserBloodType } from 'redux/auth/selectors';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { getProductsAllows } from 'redux/products/operations';

const NoProducts = styled.div`
  margin: 50px 15px 0px;
`;

const ConsumeList = ({ consumes }) => {

  const dispatch = useDispatch();
  let token = useSelector(selectToken);
  dispatch(getUserInfo(token));

  const bloodType = useSelector(selectUserBloodType);
  
  if (bloodType) {
    const productsList = dispatch(getProductsAllows(bloodType)); //validar pero debería estar en el estado tambien
    console.log(productsList);
  } else {
    toast.error('Por favor ingresar datos en la calculadora');
  }

  // primero hacer un .filter con el día y con eso hacer la validación del if

  if (consumes.length === 0) {
    return (
      <NoProducts> No hay productos en el diario para este día </NoProducts>
    );
  } else {
    return <div> tabla de productos con la validación del día </div>;
  }
};

export default ConsumeList;
