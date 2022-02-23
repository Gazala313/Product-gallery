import { Button } from "react-bootstrap";

function Section2(props) {
  if (!props.selectedProduct) {
    return <div style={{ color: "gray" }}>Please select a product first</div>;
  }
  return (
    <div className="d-flex flex-column">
      <h1>Showing Details for {props.selectedProduct.name}</h1>
      <h4>Price:{props.selectedProduct.price}</h4>
      <Button
        variant="primary"
        onClick={() => {
          props.setShowImage(true);
        }}
      >
        Photo Dikhao
      </Button>{" "}
    </div>
  );
}

export default Section2;
