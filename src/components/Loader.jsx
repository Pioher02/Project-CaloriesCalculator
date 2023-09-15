import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 128, 0, 0.2); /* Fondo sombreado oscuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Asegúrate de que esté en la parte superior */
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #FC842D; /* Color del spinner */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loader = () => (
    <LoaderWrapper>
        <Spinner />
    </LoaderWrapper>
);

export default Loader;
