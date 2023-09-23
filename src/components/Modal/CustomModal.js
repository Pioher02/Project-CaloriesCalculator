// components/Modal/CustomModal.js
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  StartLosingWeightButton,
  customModalStyle,
  ModalHeader,
  CaloriesCount,
  ForbiddenFoodsHeading,
  FoodList,
  CustomFoodListItem,

} from './ModalStyled';

Modal.setAppElement('#root');

export const DailyCalorieIntake = ({
  isOpen,
  onRequestClose,
  dataForModal,
  closeModal,
  notAllowedFoods, // Pasar la lista de alimentos no permitidos como prop
}) => {
  const navigate = useNavigate();
  const redirectTo = '/signup';

  const redirectToRegisterPage = () => {
    navigate(redirectTo);
  };

  // Verificar si dataForModal tiene valor antes de acceder a sus propiedades
  if (!dataForModal) {
    return null; // No renderizar nada si dataForModal es nulo
  }

  const { countedCalories, notAllowedFoodCategories } = dataForModal;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Resultado de Calorías"
      style={customModalStyle}
    >
      <ModalWrapper>
        <ModalHeader>Tu ingesta diaria recomendada de calorías es</ModalHeader>
        <ModalContent>
          <CaloriesCount>
            {countedCalories} <span>kcal</span>
          </CaloriesCount>
          <div>
            <div>
              <ForbiddenFoodsHeading>Alimentos que no deberías comer</ForbiddenFoodsHeading>
              <FoodList>
                {notAllowedFoodCategories.slice(0, 5).map((categorie, index) => (
                  <CustomFoodListItem key={index}>
                    {capitalizeFirstLetter(categorie)}
                  </CustomFoodListItem>
                ))}
                {notAllowedFoods.slice(0, 5).map((food, index) => (
                  <CustomFoodListItem key={index}>
                    {food.title}
                  </CustomFoodListItem>
                ))}
              </FoodList>
            </div>
          </div>
        </ModalContent>
        <CloseButton onClick={onRequestClose}>X</CloseButton>
        <StartLosingWeightButton onClick={redirectToRegisterPage}>
          Comienza a perder peso
        </StartLosingWeightButton>
      </ModalWrapper>
    </Modal >
  );
};

// Define los PropTypes
DailyCalorieIntake.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  dataForModal: PropTypes.object,
  closeModal: PropTypes.func,
  notAllowedFoods: PropTypes.array.isRequired, // Agregado: Propiedad para la lista de alimentos no permitidos
};

export default DailyCalorieIntake;
