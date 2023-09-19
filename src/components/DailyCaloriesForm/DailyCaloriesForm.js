import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { calculation } from 'redux/calculate/operations';
import { fetchNotAllowedFoods } from 'redux/auth/operations';
import { postSideBarInfo } from 'redux/products/operations';
import { selectCalculateValue } from 'redux/calculate/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { addCalories } from 'redux/calculate/slice';
import { bloodTypes } from 'helpers/constants';
import DailyCalorieIntake from '../Modal/CustomModal';

import {
  Form,
  Title,
  InputForm,
  Label,
  ButtonSubmit,
  ButtonWrap,
  RadiobuttonLabel,
  BloodTypeValue,
  RadiobuttonWrapper,
  Column,
  ColumnWrap,
  Error,
} from './DailyCaloriesForm.styled';
import { getCategoriesByBloodType } from 'helpers/getCategoriesByBloodType';

export const DailyCaloriesForm = () => {
  const dispatch = useDispatch();

  // Estado local para los datos de calorías y alimentos no permitidos
  const [calorieData, setCalorieData] = useState(null);

  // Define una variable para los alimentos no permitidos
  const [notAllowedFoods, setNotAllowedFoods] = useState([]);

  const openModal = dataForModal => {
    // Guarda los datos de calorías y alimentos no permitidos en el estado local
    setCalorieData(dataForModal);
  };

  const { formData } = useSelector(selectCalculateValue);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      height: formData.height,
      age: formData.age,
      currentWeight: formData.currentWeight,
      desiredWeight: formData.desiredWeight,
      bloodType: formData.bloodType,
    },
  });

  const heightValue = watch('height');
  const ageValue = watch('age');
  const currentWeightValue = watch('currentWeight');
  const desiredWeightValue = watch('desiredWeight');
  const bloodTypeValue = watch('bloodType');

  const onSubmitForm = async (formData) => {
    const { height, age, currentWeight, desiredWeight, bloodType } = formData;
    const countedCalories = String(
      10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight)
    );

    // Obtener alimentos no permitidos y asignarlos a notAllowedFoods
    const fetchedNotAllowedFoods = await fetchNotAllowedFoods(bloodType);
    setNotAllowedFoods(fetchedNotAllowedFoods);

    // Tomar los primeros 4 alimentos no permitidos
    const first4NotAllowedFoods = fetchedNotAllowedFoods.slice(0, 4);

    const notAllowedFoodCategories = getCategoriesByBloodType(bloodType);

    const dataForDispatch = {
      calorie: countedCalories,
      notRecommendedProduct: notAllowedFoodCategories,
      data: formData,
      notAllowedFoods: first4NotAllowedFoods, // Agregar los alimentos no permitidos aquí
    };
    const dataForModal = { countedCalories, notAllowedFoodCategories };

    isLoggedIn
      ? dispatch(
        calculation(dataForDispatch),
        postSideBarInfo({
          calorie: countedCalories,
          notRecommendedProduct: notAllowedFoodCategories,
        })
      )
      : dispatch(addCalories(dataForDispatch));

    openModal(dataForModal);
  };

  const location = useLocation();

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmitForm)} location={location.pathname}>
        <Title>Calcula tu ingesta diaria de calorías ahora mismo</Title>
        <ColumnWrap>
          <Column>
            <Label>
              Altura,cm *
              <InputForm
                value={heightValue}
                type="number"
                {...register('height', {
                  required: 'Por favor ingresa tu altura en cm ',
                  min: {
                    value: 100,
                    message: 'Altura mínima 100 cm.',
                  },
                  max: {
                    value: 250,
                    message: 'Altura máxima 250 cm.',
                  },
                })}
              />
              {errors?.height && <Error>{errors?.height?.message}</Error>}
            </Label>
            <Label>
              Edad *
              <InputForm
                value={ageValue}
                type="number"
                {...register('age', {
                  required: 'Por favor, introduzca su edad',
                  min: {
                    value: 18,
                    message: 'La edad mínima es 18 años',
                  },
                  max: {
                    value: 100,
                    message: 'La edad máxima es 100 años.',
                  },
                })}
              />
              {errors?.age && <Error>{errors?.age?.message}</Error>}
            </Label>
            <Label>
              Peso actual, kg *
              <InputForm
                value={currentWeightValue}
                type="number"
                {...register('currentWeight', {
                  required: 'Ingrese su peso actual en kg',
                  min: {
                    value: 20,
                    message: 'Peso mínimo 20 kg',
                  },
                  max: {
                    value: 500,
                    message: 'Peso máximo 500 kg',
                  },
                })}
              />
              {errors?.currentWeight && (
                <Error>{errors?.currentWeight?.message}</Error>
              )}
            </Label>
          </Column>

          <Column>
            <Label>
              Peso deseado, kg *
              <InputForm
                value={desiredWeightValue}
                type="number"
                {...register('desiredWeight', {
                  required: 'Por favor ingrese su peso deseado en kg',
                  min: {
                    value: 20,
                    message: 'Peso mínimo 20 kg',
                  },
                  max: {
                    value: 500,
                    message: 'Peso máximo 500 kg',
                  },
                })}
              />
              {errors?.desiredWeight && (
                <Error>{errors?.desiredWeight?.message}</Error>
              )}
            </Label>
            <Label>Grupo sanguíneo * </Label>
            <BloodTypeValue>{bloodTypeValue}</BloodTypeValue>
            <RadiobuttonWrapper>
              {bloodTypes.map(type => (
                <RadiobuttonLabel key={type}>
                  <input
                    {...register('bloodType', {
                      required: 'Elige tu tipo de sangre',
                    })}
                    type="radio"
                    value={type}
                    style={{ marginRight: '4px' }}
                  />
                  {type}
                </RadiobuttonLabel>
              ))}
            </RadiobuttonWrapper>
            {errors?.bloodType && <Error>{errors?.bloodType?.message}</Error>}
          </Column>
        </ColumnWrap>

        <ButtonWrap display="flex" flexDirection="column" alignItems="center">
          <ButtonSubmit type="submit" disabled={!isValid}>
            Comienza a perder peso
          </ButtonSubmit>
        </ButtonWrap>
      </Form>
      {/* Renderizado del modal */}
      <DailyCalorieIntake
        isOpen={calorieData !== null}
        onRequestClose={() => setCalorieData(null)}
        dataForModal={calorieData}
        closeModal={() => setCalorieData(null)}
        notAllowedFoods={notAllowedFoods}
      />
    </div>
  );
};

