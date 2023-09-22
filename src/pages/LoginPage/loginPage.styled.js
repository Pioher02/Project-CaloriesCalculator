import styled from 'styled-components';

export const ContainerLogin = styled.div`
  height: 105vh;
  padding: 0 0 0 50px;
  align-items: center;

  h3 {
    margin-top: 15vh;
    margin-bottom: 5vh;
    color: #FC842D;
    font-family: Verdana;
  }

  input {
    width: 300px;
    display: flex;
    padding-top: 25px;
    padding-bottom: 18px;
    font-family: Verdana;
    border: none;
    border-bottom: 3px solid #E0E0E0;
    outline: none;
    background-color: transparent;
    transition: border-bottom 0.3s ease, background-color 0.3s ease;

    &:focus,
    &:not(:placeholder-shown) {
      background-color: rgba(255, 193, 7, 0.1);
      border-bottom: 3px solid #FC842D;
    }
  }

  input::placeholder {
    font-size: 14px;
    font-weight: bold;
    color: #9B9FAA;
  }

  &.button-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  div.button-container{
    display: flex;
    align-items: center;
    width: 100%;
  }

  button {
    margin-top: 40px;
    width: 140px;
    height: 50px;
    border: 3px solid #FC842D;
    border-radius: 30px;
    background-color: white;
    font-family: Verdana;
    font-size: 15px;
    font-weight: 700;
    color: #FC842D;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #FC842D;
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
      margin-left: 15px;
    }

    button.login-active {
      background-color: #FC842D;
      color: white;
      border: 3px solid white;
    }

    /******************************************/

    @media screen and (min-width: 1120px) {
      height: 75vh;
    }


  /******************************************/

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      height: 75vh;
      margin-left: 50px;
      padding: 0;
      align-items: center;

      h3 {
        margin-top;10px;
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
        width: 160px;
        height: 60px;
        font-size: 16px;
      }

    }


    /******************************************/

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      padding: 0;
      display: flex;
      align-items: center;
      flex-direction: column;

      h3 {
        font-size: 24px;
        margin-top: 8vh;
        margin-bottom: 8vh;
      }

      input {
        width: 34vh;
        padding-top: 40px;
        padding-bottom: 30px;
        height: auto;
      }

      input::placeholder {
        font-size: 18px;
      }

    div.button-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

      button {
        margin-top: 80px;
        width: 190px;
        height: 60px;
        font-size: 18px;
      }

      button:last-child {
        margin-left: 10px;
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }

`;

