import styled from 'styled-components';

const NoProducts = styled.div `
margin: 50px 15px 0px;
`

const ConsumeList = ({consumes}) => {


    
    // primero hacer un .filter con el día y con eso hacer la validación del if



    if (consumes.length === 0) {
        return <NoProducts> No hay productos en el diario para este día </NoProducts>
    } else {

        return <div> tabla de productos con la validación del día </div>
        
    }

    

}

export default ConsumeList;