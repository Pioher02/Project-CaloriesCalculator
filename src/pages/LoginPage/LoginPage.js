import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/auth/operations';
import { ContainerLogin } from './loginPage.styled';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPage = () => {
  // Estados para el formulario y mensajes de error
  const [email, setEmail] = useState(''); // Estado para el campo de correo electrónico
  const [password, setPassword] = useState(''); // Estado para el campo de contraseña
  const [emailError, setEmailError] = useState(''); // Estado para el mensaje de error del correo electrónico
  const [passwordError, setPasswordError] = useState(''); // Estado para el mensaje de error de la contraseña
  const [buttonActive, setButtonActive] = useState(false); // Estado para el botón de login

  const activateButton = () => {
    setButtonActive(true);
  };

  // Hook useDispatch para dispatch de acciones Redux
  const dispatch = useDispatch();

  // Función para validar los campos del formulario
  const validateFields = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    // Validación del campo de correo electrónico
    if (!email) {
      setEmailError('El campo de correo electrónico es obligatorio');
      isValid = false;
    } else if (!email.includes('@')) {
      setEmailError('El correo electrónico debe contener "@"');
      isValid = false;
    }

    // Validación del campo de contraseña
    if (!password) {
      setPasswordError('El campo de contraseña es obligatorio');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
      isValid = false;
    }

    return isValid;
  };

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    if (validateFields()) { // Validar campos antes de enviar la solicitud
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
          toast.success('Inicio de sesión exitoso');
        } else {
          toast.error('Verifica tus credenciales');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        toast.error('Error al iniciar sesión');
      }
    }

        // Ocultar mensajes de error después de 5 segundos
        setTimeout(() => {
          setEmailError('');
          setPasswordError('');
        }, 5000);

  };

  return (
    <ContainerLogin>
      <h3>INICIAR SESIÓN</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
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

        <div className="button-container">
          <button type="submit" className={buttonActive ? 'login-active' : ''}>
            INICIAR SESIÓN
          </button>
          <Link to="/signup">
            <button>CREAR UNA CUENTA</button>
          </Link>
        </div>
      </form>
    </ContainerLogin>
  );
};

export default LoginPage;