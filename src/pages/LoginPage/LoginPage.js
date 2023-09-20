import React, { useState } from 'react'; // Importa React y el hook useState desde la librería 'react'.
import { useDispatch } from 'react-redux'; // Importa el hook useDispatch desde la librería 'react-redux'.
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/operations';
import { ContainerLogin } from './loginPage.styled';
import { selectIsLoggedIn } from '../../redux/selectors/authSelectors';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Obtiene la función de navegación desde react-router-dom
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {

      
      const response = await axios.post(
        'http://localhost:3001/api/users/login',
        {
          email,
          password,
        }
      );
      
      if (response.status === 200) {
        dispatch(login({ email, password }));
        navigate('/calculate');

        // Muestra un toast de éxito
        toast.success('Inicio de sesión exitoso');
      } else {
        toast.error('Verifica tus credenciales');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      toast.error('Error al iniciar sesión');
    }
  };
  if (selectIsLoggedIn) {
    // Si loggedIn es true, redirige al usuario a la ruta "/calculator"
    return (
      <ContainerLogin>
        <h3>INICIAR SESIÓN</h3>
        <input
          type="email"
          placeholder="Correo Electrónico *"
          value={email}
          onChange={e => setEmail(e.target.value)} // Maneja el cambio en el campo de entrada de correo electrónico y actualiza el estado 'email'.
        />
        <input
          type="password"
          placeholder="Contraseña *"
          value={password}
          onChange={e => setPassword(e.target.value)} // Maneja el cambio en el campo de entrada de contraseña y actualiza el estado 'password'.
        />
        <button type="submit" onClick={handleLogin}>
          INICIAR SESIÓN
        </button>
        <Link to="/register">
          <button>CREAR UNA CUENTA</button>
        </Link>
      </ContainerLogin>
    );
  }
};

export default LoginPage; // Exporta el componente LoginPage como componente predeterminado.
