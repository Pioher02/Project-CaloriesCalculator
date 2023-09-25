import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispara la acción de cierre de sesión
    dispatch(logOut());
    // Redirige al usuario a la página de inicio o a donde desees después del cierre de sesión
    navigate('/');
    showSuccessToast('Sesión cerrada con éxito');
  };

  return (
    <div>
      <h2>Cerrar Sesión</h2>
      <button onClick={handleLogout}>Sí, cerrar sesión</button>
    </div>
  );
};

export default LogoutPage;
