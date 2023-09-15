import React from 'react';
import { StyledHeader ,StyledHead,Styledtitle , StyledForm ,StyledField,StyledButton,
    StyledLogo,StyledBackground4,StyledBackground3,StyledBackground2,StyledBackground} from './banner.styles';
import Logo from '../img/logo320.png';
import img from  '../img/bckground.png';
import banana from  '../img/banana.png';
import strawberry from  '../img/strawberry.png';
import leafs from  '../img/leafs.png';
import slim from  '../img/Slim.png';

const Banner = () => {
  return (
    <>

    <StyledHead>
    <StyledHeader>
      <nav>
      <StyledLogo><img src={slim} alt='logoText'/></StyledLogo>
        <li><img src={Logo} alt='logo'/></li>
        <span>
        <li>iniciar sesión</li>
        <li>crear una cuenta</li>
        </span>
      </nav>
    </StyledHeader>
    </StyledHead>
    <Styledtitle>
    <p>Calcula tu ingesta diaria de calorías ahora mismo</p>
    </Styledtitle>
    <StyledForm>
        <form>
            <label>
                Altura *
                <input type="text" />
            </label>
            <label>
                Peso Deseado *
                <input type="number" />
            </label>
            <label>
                Edad *
                <input type="number" />
            </label>
            <label>
                Grupo Sanguineo *
                <StyledField>
                <input type="radio" name="grupoSanguineo" value="1" /><span>1</span>
                <input type="radio" name="grupoSanguineo" value="2" /><span>2</span>
                <input type="radio" name="grupoSanguineo" value="3" /><span>3</span>
                <input type="radio" name="grupoSanguineo" value="4" /><span>4</span>
                </StyledField>
            </label>
            <label>
                Peso Actual *
                <input type="number" />
            </label>
        </form>
    </StyledForm>
    <StyledButton>
    Comienza a perder peso
    </StyledButton>
    <StyledBackground>
       <img src={img} alt="fondo"/>
       <StyledBackground2>
       <img src={banana} alt="fondo"/>
       </StyledBackground2>
       <StyledBackground3>
       <img src={strawberry} alt="fondo"/>
       </StyledBackground3>
        <StyledBackground4>
        <img src={leafs} alt="fondo"/>
        </StyledBackground4>
    </StyledBackground>
   
    </>
  );
};

export default Banner;
