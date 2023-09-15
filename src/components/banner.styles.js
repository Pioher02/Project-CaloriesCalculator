import styled from 'styled-components';
export const StyledHeader = styled.div`
li{
    list-style:none;
    font-family: Verdana;
    color: #9B9FAA;
}
@media (min-width: 320px) and (max-width: 767px) {
  width: 280px;
  height: 44px;
  position: absolute;
  top:30px;
  left:20px;
  nav{
    display:flex;
  }
  li{
    width:100px;
    height:34px;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-align: center;
    
  }
  span{
    display:flex;
    justify-content: flex-end;
    margin-top:0px;
  }
  li:first-child {
    display:flex;
    justify-content: flex-start;
  }
}
@media (min-width: 768px) and (max-width: 1279px) {
    width: 700px;
    height: 44px;
    position: absolute;
    top:30px;
    left:20px;
    nav{
      display:flex;
    }
    li{
      width:142px;
      height:34px;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0.04em;
      text-align: center;
    }
    li:first-child {
      margin-top:-30px;
      width:162;
      height:44px;
    }
    li:not(:first-child) {
      margin-top:-30px;
    }
    span{  
        display:flex;
        margin-left:260px;
        margin-top:40px;
        gap:30px;
    }
  }
    @media (min-width: 1280px) {
      width: 100%;
      height: 44px;
      nav{
        display:flex;
      }
      li{
        width:142px;
        height:34px;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0.04em;
        text-align: center;
      }
      li:first-child {
      margin-top:-5px;
      width:162;
      height:44px;
    }
    li:not(:first-child) {
      margin-top:-5px;
    }
      span{
        display:flex;
        margin-left:850px;
        margin-top:40px;
        gap:30px;
    }
  }
`;
export const StyledLogo = styled.div`
@media (min-width: 320px) and (max-width: 767px) {
  display:none;
}
@media (min-width: 768px) and (max-width: 1279px) {
  position:absolute;
  left:100px;
  top:10px;
}
@media (min-width: 1280px) {
  position:absolute;
  left:110px;
  top:30px;
}
`;
export const StyledHead = styled.div`
border-bottom:2px solid #E0E0E0;
@media (min-width: 320px) and (max-width: 767px) {
  width: 320px;
  height: 80px;
  border-bottom:2px solid #E0E0E0;
}
@media (min-width: 768px) and (max-width: 1279px) {
  width: 768px;
  height: 80px;
  border-bottom:2px solid #E0E0E0;
display:flex;
}
@media (min-width: 1280px) {
  width: 100%;
  height: 80px;
}
`;
export const Styledtitle = styled.div`
font-size: 18px;
font-family: Verdana;
@media (min-width: 320px) and (max-width: 767px) {
width:280px;
height:50px;
position:absolute;
top:90px;
left:20px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
}
@media (min-width: 768px) and (max-width: 1279px) {
    width:704px;
    height:85px;
    position:absolute;
    top:150px;
    left:32px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    font-size:34px;
    line-height:47.6px;
}
@media (min-width: 1280px) {
  width:704px;
  height:85px;
  position:absolute;
  top:250px;
  left:32px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  font-size:34px;
  line-height:47.6px;
}
`;

export const StyledForm = styled.div`
label{
  font-family: Verdana;
  color:#9B9FAA;
}
input{
  border:none;
}
@media (min-width: 320px) and (max-width: 767px) {
width: 240px;
height: 269px;
margin-top: 120px;
margin-left: 20px;
form{
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
}
input{
  width:230px;
  height:16px;
  border-top:2px solid #9B9FAA;
  margin-top:10px;
  margin-bottom:20px;
}
}
@media (min-width: 768px) and (max-width: 1279px) {
  width: 704px;
  height: 170px;
  margin-top: 250px;
  margin-left: 32px;
  form{
    display:grid;
    grid-template-columns:300px 300px;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-align: left;
  }
  input{
    width:240px;
    height:16px;
    border-top:2px solid #9B9FAA;
    margin-top:10px;
    margin-bottom:10px;
  }    
}
@media (min-width: 1280px) {
  width: 704px;
  height: 170px;
  margin-top: 400px;
  margin-left: 32px;
  form{
  display:grid;
  grid-template-columns:300px 300px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
  }
  input{
  width:240px;
  height:16px;
  border-top:2px solid #9B9FAA;
  margin-top:10px;
  margin-bottom:10px;
  }
}
`;

export const StyledField = styled.div`
@media (min-width: 320px) and (max-width: 767px) {
display:flex;
margin-left:-40px;
margin-top:10px;
input{
margin-left:-30px;
}
span{
margin-top:9px;
margin-left:-70px;
}
}
@media (min-width: 768px) and (max-width: 1279px) {
display:flex;
margin-left:-40px;
width:280px;
margin-top:10px;
input{
margin-left:-30px;
}
span{
margin-top:9px;
margin-left:-70px;
}
}
@media (min-width: 1280px) {
  display:flex;
  margin-left:-40px;
  width:280px;
  margin-top:10px;
  input{
  margin-left:-30px;
  }
  span{
  margin-top:9px;
  margin-left:-70px;
  }
}
`;
export const StyledButton = styled.button`
background-color:#FC842D;
box-shadow: 0px 4px 10px 0px #FC842D80;
font-family: Verdana;
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0.04em;
text-align: center;
color: #FFFFFF;
@media (min-width: 320px) and (max-width: 767px) {
    width:210px;
    heigth:43px;
    margin-top:90px;
    margin-left:55px;
    border-Radius:30px;
    border:none;
}
@media (min-width: 768px) and (max-width: 1279px) {
    width:210px;
    heigth:43px;
    margin-top:40px;
    margin-left:32px;
    border-Radius:30px;
    border:none;
}
@media (min-width: 1280px) {
    width:250px;
    heigth:100px;
    margin-top:40px;
    margin-left:350px;
    border-Radius:30px;
    border:none;
    padding:10px;
}
`;
export const StyledBackground = styled.div`
@media (min-width: 320px) and (max-width: 767px) {
 display:none;
}
@media (min-width: 768px) and (max-width: 1279px) {
position:absolute;
bottom:0px;
right:0px;
width:450px;
height:560px;

}
@media (min-width: 1280px) {
position:absolute;
top:20px;
right:35px;
width:550px;
height:550px;
}
`;
export const StyledBackground2 = styled.div`
@media (min-width: 768px) and (max-width: 1279px) {
position:absolute;
bottom:0px;
right:0px;
width:500px;
height:300px;

}
@media (min-width: 1280px) {
position:absolute;
top:0px;
left:90px;
width:500px;
height:300px;
}
`;
export const StyledBackground3 = styled.div`
@media (min-width: 768px) and (max-width: 1279px) {
    position:absolute;
    bottom:207px;
    right:-160px;
    width:500px;
    height:300px;
}
@media (min-width: 1280px) {
    position:absolute;
    top:450px;
    right:-160px;
    width:500px;
    height:300px;
}
`;
export const StyledBackground4 = styled.div`
@media (min-width: 768px) and (max-width: 1279px) {
    position:absolute;
    bottom:300px;
    right:600px;
    width:500px;
    height:300px;
}
@media (min-width: 1280px) {
  position:absolute;
    top:-40px;
    right:440px;
    width:500px;
    height:250px;
}
`;