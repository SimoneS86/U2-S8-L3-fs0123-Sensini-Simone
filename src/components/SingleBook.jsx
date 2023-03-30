import { Card, Badge, Col } from "react-bootstrap";
const SingleBook = (props) => (
  <>
    <Col xs={12} md={4} key={props.asin}>
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Text>{props.title}</Card.Text>
          <Badge bg="secondary">{props.price}</Badge>
        </Card.Body>
      </Card>
    </Col>
  </>
);
export default SingleBook;