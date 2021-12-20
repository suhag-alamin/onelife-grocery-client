import React from "react";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import { AiOutlineShoppingCart, AiOutlineDoubleRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import shopStyles from "../../styles/Shop.module.scss";
import Link from "next/link";

const SingleGrocery = ({ grocery }) => {
  const { _id, name, price, description, categories, weight, productImg } =
    grocery;
  const dispatch = useDispatch();

  return (
    <>
      <Card className={`${shopStyles.card}  rounded-3`}>
        <div className="overflow-hidden">
          <Card.Img
            as={Image}
            variant="top"
            src={productImg}
            width={600}
            height={400}
            alt=""
          />
        </div>
        <Card.Body>
          <Card.Title className={`${shopStyles.cardTitle}`}>{name}</Card.Title>
          <h4 className={`${shopStyles.price}`}>$ {price}</h4>
          <Card.Text>{description.slice(0, 60)}...</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              onClick={() => dispatch(addToCart(_id))}
              className="d-flex align-items-center gap-2"
              variant=""
            >
              Add to Cart
              <AiOutlineShoppingCart />
            </Button>
            <Link href={`/shop/${_id}`} passHref>
              <a>
                More Details <AiOutlineDoubleRight />{" "}
              </a>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleGrocery;
