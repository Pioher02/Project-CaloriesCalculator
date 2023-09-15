import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff; /* Fondo blanco */
  width: 608px; /* Ancho de 608px */
  height: 343px; /* Alto de 343px */
`;

export const Form = styled.form`
flex - direction: column;
align - items: center;
width: 100 %;
margin:10px;
padding: 10px;


  .column {
  flex - direction: column;
  width: 50 %; /* Divide en dos columnas */
  padding: 10px; /* Agrega espacio entre las columnas */
}

  input,
  select {
    Width: 240px; /* Ocupar todo el ancho disponible */
    border: none;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 17px;
  color: #9b9b9b;
  margin:5px;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  }

  select {
    margin-top: 0; /* Elimina el margen superior del select */
  }

  .row {
    display: flex;
    justify-content: space-between; /* Espacio uniforme entre los elementos */
    width: 100%;
    margin-bottom: 10px; /* Margen inferior para separar las filas */
  }

  button {
    margin: 10px;
   background-color: #FC842D;
  width: 210px;
  height: 43px;
  border: none;
  border-radius: 30px;
  color: white;
  font-family: Verdana, sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
