import styled from 'styled-components';

export const ContainerRegister = styled.div`
  height: 105vh;
  padding: 0 0 0 50px;
  align-items: center;

  h3 {
    margin-top: 8vh;
    margin-bottom: 4vh;
    color: #fc842d;
    font-family: Verdana;
  }

  input {
    width: 300px;
    display: flex;
    padding-top: 25px;
    padding-bottom: 18px;
    font-family: Verdana;
    border: none;
    border-bottom: 3px solid #e0e0e0;
    outline: none;
    background-color: transparent;
    transition: border-bottom 0.3s ease, background-color 0.3s ease;

    &:focus,
    &:not(:placeholder-shown) {
      background-color: rgba(255, 193, 7, 0.1);
      border-bottom: 3px solid #fc842d;
    }
  }

  input::placeholder {
    font-size: 14px;
    font-weight: 700;
    color: #9b9faa;
  }

  button {
    margin-top: 40px;
    width: 140px;
    height: 50px;
    border-radius: 30px;
    border: 3px solid #fc842d;
    background-color: white;
    font-family: Verdana;
    font-size: 15px;
    font-weight: 700;
    color: #fc842d;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #fc842d;
      color: white;
    }

    &:active {
      color: white;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(252, 132, 45, 0.5);
    }
  }

  button:last-child {
    margin-left: 20px;
  }

  button.register-active {
    background-color: #fc842d;
    color: white;
    border: 3px solid white;
    &:hover {
      background-color: #e05e00;
    }
  }

  /******************************************/

  @media screen and (min-width: 1120px) {
  }

  /******************************************/

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 90vh;
    margin-left: 50px;
    padding: 0;
    align-items: center;

    h3 {
      margin-top: 16vh;
      font-size: 20px;
      margin-bottom: 6vh;
    }

    input {
      width: 40%;
      padding-top: 40px;
      padding-bottom: 20px;
      height: auto;
    }

    input::placeholder {
      font-size: 16px;
    }

    button {
      margin-top: 60px;
      margin-bottom: 30px;
      height: 60px;
      font-size: 16px;
    }
  }

  /******************************************/

  @media (max-width: 768px) {
    padding: 0;
    align-items: center;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
      font-size: 24px;
      margin-top: 6vh;
      margin-bottom: 6vh;
    }

    input {
      width: 80%;
      padding-top: 40px;
      padding-bottom: 30px;
      height: auto;
    }

    input::placeholder {
      font-size: 18px;
    }

    button {
      margin-top: 60px;
      width: 200px;
      height: 60px;
      font-size: 18px;
    }

    button:last-child {
      margin-left: 0px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
`;

export const Title = styled.div`
  margin-top: 20px;
  width: 35%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 41%;
  }
`;
