import React from "react";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/grocerySlice";

const SingleGrocery = ({ grocery }) => {
  const { _id, name, price, description, categories, weight, productImg } =
    grocery;
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <Card.Img
          as={Image}
          variant="top"
          src={productImg}
          width={600}
          height={400}
          alt=""
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 60)}...</Card.Text>
          <Button
            onClick={() => dispatch(addToCart(_id))}
            className="d-flex align-items-center gap-2"
            variant=""
          >
            Add to Cart
            <AiOutlineShoppingCart />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleGrocery;
