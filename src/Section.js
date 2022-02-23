import { ListGroup } from "react-bootstrap";

function Section(props) {
  return (
    <ListGroup>
      {props.products.name.map((product) => {
        return (
          <ListGroup.Item key={product.name}>{product.name}</ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Section;
