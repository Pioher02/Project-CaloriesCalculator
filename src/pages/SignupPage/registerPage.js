import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/operations';
import { ContainerRegister, Title } from './registerPage.styled';
import { toast } from 'react-toastify';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // Validaciones de campos
    if (!username) {
      setUsernameError('El campo de Nombre es obligatorio');
    } else {
      setUsernameError('');
    }

    if (!email) {
      setEmailError('El campo de Correo Electrónico es obligatorio');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('El campo de Contraseña es obligatorio');
    } else {
      setPasswordError('');
    }

    if (username && email && password) {
      try {
        // Realiza una solicitud POST al servidor para registrar al usuario
        const response = await axios.post('http://localhost:3001/api/users/signup', {
          username,
          email,
          password,
        });

        if (response.status === 201) {
          dispatch(login({ email, password }));
          navigate('/calculate');
          toast.success('¡Registro exitoso! Redirigiendo...');
        } else {
          toast.error('Hubo un problema durante el registro. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error al registrarse:', error);
        toast.error('Error al registrarse');
      }
    }

    // Ocultar mensajes de error después de 5 segundos
    setTimeout(() => {
      setUsernameError('');
      setEmailError('');
      setPasswordError('');
    }, 5000);
  };

  return (
    <div>
      <ContainerRegister>
        <Title>
          <h3>CREAR UNA CUENTA</h3>
        </Title>
        <h3>CREAR UNA CUENTA</h3>
        <input
          type="text"
          placeholder="Nombre *"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        {usernameError && <p className="error">{usernameError}</p>}

        <input
          type="email"
          placeholder="Correo Electrónico *"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {emailError && <p className="error">{emailError}</p>}

        <input
          type="password"
          placeholder="Contraseña *"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {passwordError && <p className="error">{passwordError}</p>}

        <button onClick={handleSubmit}>CREAR UNA CUENTA</button>
        <Link to="/login">
          <button>INICIAR SESIÓN</button>
        </Link>
      </ContainerRegister>
    </div>
  );
};

export default RegisterPage;
