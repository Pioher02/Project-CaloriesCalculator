import styled from 'styled-components';

export const Container = styled.div`

@media (max-width: 768px) {
  width: auto;
  display: flex;
}

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}
`;

export const ContainerHeader = styled.header`

  img {
      margin: 40px 20px 0 30px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
  }

  /******************************************/

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    padding: 0 0 20px 0;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1) inset 0px -2px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid #ccc;

    img {
      margin-top: 20px;
      margin-left: 20px;
  }
  }


  /******************************************/

  @media (max-width: 768px) {

    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0 0 20px 0;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1) inset 0px -2px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid #ccc;

    img.Linea {
      display: none;
    }

    img.Logo {
      display: none;
    }

    img {
      margin: 5px 8px 0 0;
    }
  }
`;

export const Div = styled.div`

    display: contents;
    align-items: center;


  a {
    margin-bottom: 10px;
    font-size: 16px;
    font-family: Verdana;
    font-weight: 700;
    color: #9B9FAA;
    text-decoration: none;

    &:hover {
      color: black;
      background-color: transparent;
    }

    &:active {
      color: black;
    }

    &:last-child {
      margin-left: 20px;
      margin-right: 15px;
    }
  }

  /******************************************/

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: auto%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 10px;

  }


  /******************************************/

  @media (max-width: 768px) {
    flex-direction: row;
    margin-left: 10px;

    a {
      width: 100px;
      margin: 50px 0 0 0 ;
      font-size: 14px;
      text-align: center;
    }
  }
`;


export const MobileLogo = styled.img`

  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 20px;
}

`;


export const Ajuste = styled.div`

  @media (max-width: 768px) {
    width: auto;
    display: flex;
    justify-content: space-around;
}

`;


