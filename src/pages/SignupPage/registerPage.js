import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/operations';
import { ContainerRegister, Title } from './registerPage.styled';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from 'components/Loader/spinnerApp';
import { baseURL } from 'helpers/constants';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [buttonActive, setButtonActive] = useState(false); // Estado para el botón de registro
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activateButton = () => {
    setButtonActive(true);
  };

  const handleSubmit = async () => {
    setIsLoading(true); // Activar el spinner al iniciar sesión
    // Validaciones de campos
    let isValid = true;

    if (!username) {
      setUsernameError('El campo de Nombre es obligatorio');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (!email) {
      setEmailError('El campo de Correo Electrónico es obligatorio');
      isValid = false;
    } else if (!email.includes('@')) {
      setEmailError('El correo electrónico debe contener "@"');
      isValid = false;
    }

    if (!password) {
      setPasswordError('El campo de Contraseña es obligatorio');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
      isValid = false;
    }

    if (isValid) {
      try {
        // Realiza una solicitud POST al servidor para registrar al usuario
        const response = await axios.post(`${baseURL}/users/signup`, {
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
      } finally {
        setIsLoading(false); // Desactivar el spinner después de completar la solicitud
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
        <input
          type="text"
          placeholder="Nombre *"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={activateButton} // Activar el botón cuando se enfoca en el campo de nombre
        />
        {usernameError && <p className="error">{usernameError}</p>}

        <input
          type="email"
          placeholder="Correo Electrónico *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={activateButton} // Activar el botón cuando se enfoca en el campo de correo
        />
        {emailError && <p className="error">{emailError}</p>}

        <input
          type="password"
          placeholder="Contraseña *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={activateButton} // Activar el botón cuando se enfoca en el campo de contraseña
        />
        {passwordError && <p className="error">{passwordError}</p>}

        <button
          onClick={handleSubmit}
          className={buttonActive ? 'register-active' : ''} // Aplicar la clase si el botón está activo
          disabled={isLoading} // Deshabilitar el botón durante la carga
        >
          {isLoading ? 'Cargando...' : 'CREAR UNA CUENTA'}
        </button>
        <Link to="/login">
          <button>INICIAR SESIÓN</button>
        </Link>
      </ContainerRegister>
      {isLoading && <Loader />} {/* Mostrar el spinner durante la carga */}
    </div>
  );
};

export default RegisterPage;