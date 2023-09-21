import styled from 'styled-components';

export const ContainerLogin = styled.div`
  padding: 40px 0 0 50px;
  align-items: center;

  h3 {
    margin-top: 18vh;
    color: #FC842D;
    font-family: Verdana;
  }

  input {
    width: 280px;
    display: flex;
    padding-top: 20px;
    padding-bottom: 10px;
    font-family: Verdana;
    border: none;
    border-bottom: 3px solid #E0E0E0;
    outline: none;
    background-color: transparent;
  }

  input::placeholder {
    font-size: 14px;
    font-weight: 700;
    color: #9B9FAA;
  }

  button {
    margin-top: 50px;
    width: 140px;
    height: 44px;
    border-radius: 30px;
    border-color: #FC842D;
    background-color: white;
    font-family: Verdana;
    font-size: 14px;
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
  }

    button:last-child {
      margin-left: 15px;
    }

    /******************************************/

    @media screen and (min-width: 1120px) {

    }


  /******************************************/

    @media screen and (min-width: 769px) and (max-width: 1024px) {
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
        width: 140px;
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

