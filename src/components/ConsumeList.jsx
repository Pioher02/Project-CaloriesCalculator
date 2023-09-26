import styled from 'styled-components';

const Text = styled.p`
  margin-top: 50px;
`;
const Table = styled.table`
  margin-top: 10px;
  font-size: 14px;
`;

const FirstRow = styled.td`
  border-bottom: 1px solid rgb(224, 224, 224);
  width: 240px;
`;

const Row = styled.td`
  border-bottom: 1px solid rgb(224, 224, 224);
  text-align: end;
  width: 100px;

  @media (max-width: 767px) {
    width: 80px;
  }
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #9b9faa;
  cursor: pointer;
`;

const ConsumeList = ({ consumes }) => {
  if (consumes.length === 0) {
    return <Text>No hay productos en el diario para este día</Text>;
  } else {
    return (
      <Table>
        <tbody>
          {consumes.map(consume => {
            return (
              <tr key={consume.productConsume}>
                <FirstRow>{consume.productConsume}</FirstRow> <Row>{consume.grams} g</Row>
                <Row>{consume.calories} kcal</Row>
                <td>
                  <Button>X</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
};

export default ConsumeList;
