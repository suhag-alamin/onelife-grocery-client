import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleGrocery from "../../SingleGrocery";
import shopStyles from "../../../styles/Shop.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";

const LatestProdcuts = () => {
  const { groceries } = useSelector((state) => state.oneLifeGrocery);
  const router = useRouter();
  const handleClick = () => {
    router.push("/shop");
  };
  return (
    <Container className={`${shopStyles.shop} py-5`}>
      <h3 className={`${shopStyles.title} text-center mb-4`}>
        Latest Groceries
      </h3>
      <Row xs={1} md={4} className="g-4">
        {groceries.slice(0, 4).map((grocery) => (
          <Col key={grocery._id}>
            <SingleGrocery grocery={grocery} />
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center text-center mt-4">
        <Button
          onClick={handleClick}
          className="d-flex align-items-center gap-2"
        >
          View all groceries
          <AiOutlineArrowRight />
        </Button>
      </div>
    </Container>
  );
};

export default LatestProdcuts;
