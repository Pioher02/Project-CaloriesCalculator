import styled from 'styled-components';

const Text = styled.p`
  margin-top: 50px;
//   @media (max-width: 1279px) {
//   top: 400px;
//   left: 60px;
// }

// @media (max-width: 767px) {
//   top: 380px;
// }
`;


const ConsumeList = ({ consumes }) => {
  if (consumes.length === 0) {
    return <Text>No hay productos en el diario para este día</Text>;
  } else {
    return (
      <table>
        <tbody>
          {consumes.map(consume => {
            return (
              <tr>
                <td>{consume.productConsume}</td> <td>{consume.grams} g</td>
                <td>{consume.calories} kcal</td>
                <td>
                  <button>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
};

export default ConsumeList;
