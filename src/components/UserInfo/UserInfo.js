import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { removeCalories } from 'redux/calculate/slice';
import { selectUserName } from 'redux/auth/selectors';
import { AcceptModal } from 'components/AcceptModal';
import { UserInfoContainer, UserName, Button } from './UserInfo.styled';

import { Box } from 'components/Box';

export const UserInfo = ({ burgeractive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAcceptModalOpen, setIsAcceptModalopen] = useState(false);
  const userName = useSelector(selectUserName);

  const Logout = () => {
    setIsAcceptModalopen(false);
    window.document.body.style.overflow = 'unset';
    dispatch(logOut());
    navigate('/');
    dispatch(removeCalories());
  };

  const openAcceptModal = () => {
    setIsAcceptModalopen(true);
    window.document.body.style.overflow = 'hidden';
  };

  const closeAcceptModal = () => {
    setIsAcceptModalopen(false);
    window.document.body.style.overflow = 'unset';
  };

  const location = useLocation();

  return (
    <UserInfoContainer burger={burgeractive} location={location.pathname}>
      <Box display="flex" ml="auto">
        <UserName>{userName}</UserName>
        <Button type="button" onClick={() => openAcceptModal()}>
          Salir
        </Button>
        <>
          {isAcceptModalOpen && (
            <AcceptModal
              closeModal={closeAcceptModal}
              acceptAction={`Salir, ${userName}`}
              agreeButton={{
                text: 'Salir',
                action: Logout,
              }}
              desagreeButton={{
                text: 'Quedarse',
                action: closeAcceptModal,
              }}
            ></AcceptModal>
          )}
        </>
      </Box>
    </UserInfoContainer>
  );
};
