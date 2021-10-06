import {Card} from 'react-bootstrap';

const CardItem = ({key}) => {
  return (
    <>
      <Card key={key} style={{ width: "18rem", marginRight: 10 }} className="border">
        <Card.Img variant="top" src="https://via.placeholder.com/200" alt="Foto del producto" />
        <Card.Body>
          <Card.Title>Nombre del producto</Card.Title>
          <Card.Text>
            Descripción del producto.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
} 

export default CardItem;