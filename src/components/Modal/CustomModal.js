// components/Modal/CustomModal.js
import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import { routes } from 'helpers/constants';

import {
  LinkStyled,
  ModalWrapper,
  ModalContent,
  CloseButton,
  StartLosingWeightButton,
  customModalStyle
} from './ModalStyled';

Modal.setAppElement('#root');

export const DailyCalorieIntake = ({
  isOpen,
  onRequestClose,
  dataForModal: { countedCalories, notAllowedFoodCategories },
  closeModal,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const redirectTo = isLoggedIn ? routes.diaryToday : routes.signup;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Resultado de Calorías"
      style={customModalStyle}
    >
      <ModalWrapper>
        <h2>Tu ingesta diaria recomendada de calorías es</h2>
        <ModalContent>
          <p style={{ fontFamily: 'Verdana', fontWeight: '700', fontSize: '48px', color: '#264061' }}>
            {countedCalories} <span style={{ fontSize: '24px' }}>kcal</span>
          </p>
          <div>
            <h3 style={{ color: '#264061' }}>Alimentos que no deberías comer</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {notAllowedFoodCategories.slice(0, 5).map(categorie => {
                return (
                  <li
                    key={categorie}
                    style={{
                      backgroundColor: '#f7f7f7',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      margin: '4px 0',
                      padding: '8px',
                    }}
                  >
                    {capitalizeFirstLetter(categorie)}
                  </li>
                );
              })}
            </ul>
          </div>
        </ModalContent>
        <CloseButton onClick={onRequestClose}>X</CloseButton>
        <LinkStyled to={redirectTo}>
          <StartLosingWeightButton onClick={closeModal}>Comienza a perder peso</StartLosingWeightButton>
        </LinkStyled>
      </ModalWrapper>
    </Modal>
  );
};

export default DailyCalorieIntake;

