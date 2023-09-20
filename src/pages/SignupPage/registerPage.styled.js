import styled from 'styled-components';

export const ContainerRegister = styled.div`
  padding: 30px 0 0 50px;
  align-items: center;

  h3 {
    margin-top: 5vh;
    color: #FC842D;
    font-family: Verdana;
  }

  input {
    width: 350px;
    display: flex;
    padding-top: 25px;
    padding-bottom: 20px;
    font-family: Verdana;
    border: none;
    border-bottom: 3px solid #E0E0E0;
    outline: none;
    background-color: transparent;
  }

  input::placeholder {
    font-size: 16px;
    font-weight: 700;
    color: #9B9FAA;
  }


  button{
    margin-top: 40px;
    width: 140px;
    height: 50px;
    border-radius: 30px;
    border-color: #FC842D;
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
  }

    button:last-child {
      margin-left: 20px;
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
        width: 160px;
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

export const Title = styled.div`
  margin-top: 20px;
  width: 35%;
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }

`;
