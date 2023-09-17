import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Calculadora = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleLogout = async () => {
    try {
      await dispatch(logOut());

      // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
      navigate('/register'); // Reemplaza '/iniciar-sesion' con la ruta real de tu página de inicio de sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div>
      <h2>Cerrar Sesión</h2>
      <button onClick={handleLogout}>Sí, cerrar sesión</button>
    </div>
  );
};

export default Calculadora;

