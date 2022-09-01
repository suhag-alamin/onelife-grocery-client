import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroceries } from "../../../redux/slices/grocerySlice";
import shopStyles from "../../../styles/Shop.module.scss";
import SingleGrocery from "../../SingleGrocery";

const LatestProdcuts = () => {
  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroceries());
  }, [dispatch]);

  const { oneLifeGrocery } = useSelector((state) => state);
  const { groceries } = oneLifeGrocery;
  const router = useRouter();
  // loading spinner
  if (oneLifeGrocery.status === "pending") {
    return (
      <div className="text-center py-2">
        <Spinner animation="border" />
      </div>
    );
  }

  const handleClick = () => {
    router.push("/shop");
  };
  return (
    <Container className={`${shopStyles.shop} py-5`}>
      <h3 className={`${shopStyles.title} text-center mb-4`}>
        Latest Groceries
      </h3>
      <Row xs={1} md={2} lg={4} className="g-4">
        {groceries?.slice(0, 4)?.map((grocery) => (
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
