import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/header';
import { register } from '../redux/actions/authActions';
import { ContainerRegister, Title } from './registerPage.styled';
import { toast } from 'react-toastify';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Realiza una solicitud POST al servidor para registrar al usuario
      const response = await axios.post('http://localhost:3000/api/users/register', {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        // Si el registro fue exitoso, ejecuta estas acciones
        dispatch(register({ username, email, password }));
        navigate('/calculator');
        toast.success('¡Registro exitoso! Redirigiendo...');
      } else {
        // Si el registro no fue exitoso, muestra un mensaje de error
        toast.error('Hubo un problema durante el registro. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al registrarse:', error);
      toast.error('Error al registrarse');
    }
  };

  return (
    <div>
      <Header />
      <ContainerRegister>
        <Title>
          <h3>CREAR UNA CUENTA</h3>
        </Title>
        <input
          type="text"
          placeholder="Nombre *"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo Electrónico *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>CREAR UNA CUENTA</button>
        <Link to="/login">
          <button>INICIAR SESIÓN</button>
        </Link>
      </ContainerRegister>
    </div>
  );
};

export default RegisterPage;
