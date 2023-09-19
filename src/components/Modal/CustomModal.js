import React, { useState, useEffect } from 'react';
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
  FoodListItem,
} from './ModalStyled';

Modal.setAppElement('#root');

export const DailyCalorieIntake = ({
  isOpen,
  onRequestClose,
  dataForModal,
  closeModal,
  notAllowedFoods, // Asegúrate de que notAllowedFoods sea una propiedad
}) => {
  const navigate = useNavigate();
  const redirectTo = '/registro';

  // Estado para almacenar los alimentos no saludables
  const [notAllowedFoodsData, setNotAllowedFoodsData] = useState([]);

  // Función para obtener los alimentos no saludables
  const fetchNotAllowedFoods = () => {
    fetch('/api/not-allowed-foods')
      .then(response => response.json())
      .then(data => setNotAllowedFoodsData(data))
      .catch(error => console.error('Error fetching not allowed foods:', error));
  };

  // Utiliza useEffect para cargar los alimentos no saludables cuando el modal se abre
  useEffect(() => {
    if (isOpen) {
      fetchNotAllowedFoods();
    }
  }, [isOpen]);

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
            <FoodList>
              {notAllowedFoodCategories.slice(0, 5).map((categorie, index) => (
                <FoodListItem key={index}>
                  {capitalizeFirstLetter(categorie)}
                </FoodListItem>
              ))}
            </FoodList>
          </div>
          <div>
            <ForbiddenFoodsHeading>Alimentos no permitidos</ForbiddenFoodsHeading>
            <FoodList>
              {/* Utiliza notAllowedFoods en lugar de notAllowedFoodsData */}
              {notAllowedFoods.slice(0, 5).map((food, index) => (
                <FoodListItem key={index}>
                  {food}
                </FoodListItem>
              ))}
            </FoodList>
          </div>
        </ModalContent>
        <CloseButton onClick={onRequestClose}>X</CloseButton>
        <StartLosingWeightButton onClick={() => navigate(redirectTo)}>
          Comienza a perder peso
        </StartLosingWeightButton>
      </ModalWrapper>
    </Modal>
  );
};

export default DailyCalorieIntake;
