import { useSelector } from 'react-redux';
import { selectProductsList } from 'redux/products/selectors';
import { selectCalculateValue } from 'redux/calculate/selectors';
import { getSelectedDate } from 'redux/date/selectors';
// import { Loader } from 'components/Loader/Loader';

import {
  SideBarContainer,
  Box,
  Title,
  P,
  Span,
  TextBox,
  Ul,
  Li,
} from './SideBar.styled';

export const SideBar = () => {
  const selectedDate = useSelector(getSelectedDate);

  const { countedCalories, notAllowedFoodCategories } =
    useSelector(selectCalculateValue);

  // const products = useSelector(selectProductsList);

  const products = [];
  
  const totalCalories = products
    .reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.productCalories),
      0
    )
    .toFixed(2);
  const diffCalories = (Number(countedCalories) - totalCalories).toFixed(2);
  const percentage = ((totalCalories / Number(countedCalories)) * 100).toFixed(
    2
  );

  return (
    <Box>
      <SideBarContainer>
        {/* {isLoading ? <Loader /> : null} */}
        <Title>
          Resumen para el <span>{selectedDate}</span>
        </Title>
        <TextBox>
          <ul>
            <li>
              <P>
                <Span>Quedan</Span>
              </P>
            </li>
            <li>
              <P>
                <Span>Сonsumido</Span>
              </P>
            </li>
            <li>
              <P>
                <Span>Daily Rate</Span>
              </P>
            </li>
            <li>
              <P>
                <Span>n% de lo normal</Span>
              </P>
            </li>
          </ul>

          <Ul>
            <Li>
              <P>
                <Span> {diffCalories} kcal</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>{totalCalories} кcal</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>{countedCalories ?? 0} кcal</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>{isNaN(percentage) ? 0 : percentage} %</Span>
              </P>
            </Li>
          </Ul>
        </TextBox>
      </SideBarContainer>
      <SideBarContainer>
        <Title>Alimentos no recomendados</Title>
        <ul>
          {notAllowedFoodCategories &&
            notAllowedFoodCategories.slice(0, 4).map(product => {
              return (
                <li key={product.title}>
                  <P>
                    <span>{product.title}</span>
                  </P>
                </li>
              );
            })}
        </ul>
      </SideBarContainer>
    </Box>
  );
};
