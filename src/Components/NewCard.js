import React from "react";
import { Card } from "react-bootstrap";

const NewCard = ({ el }) => {
  return (
    <div>
      {" "}
      <>
        {["Dark"].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>{el.title}</Card.Header>
            <Card.Body>
              <Card.Title>{el.title} </Card.Title>
              <Card.Text>{el.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    </div>
  );
};

export default NewCard;
