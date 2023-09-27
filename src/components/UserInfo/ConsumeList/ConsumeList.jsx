import { Text, Table, FirstRow, Row, Button } from './ConsumeList.styled';

const ConsumeList = ({ consumes, deleteConsume }) => {
  if (consumes.length === 0) {
    return <Text>No hay productos en el diario para este día</Text>;
  } else {
    return (
      <Table>
        <tbody>
          {consumes.map((consume, index) => {
            return (
              <tr key={index}>
                <FirstRow>{consume.productConsume}</FirstRow>{' '}
                <Row>{consume.grams} g</Row>
                <Row>{consume.calories} kcal</Row>
                <td>
                  <Button onClick={() => deleteConsume(index)}>
                    X
                  </Button>
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
