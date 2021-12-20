import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SingleGrocery from "../components/SingleGrocery";
import { fetchGroceries } from "../redux/slices/grocerySlice";
import shopStyles from "../styles/Shop.module.scss";

// https://onelife-grocery.herokuapp.com
const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  // get groceries from redux store
  const { groceries } = useSelector((state) => state.oneLifeGrocery);
  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroceries());
    setIsLoading(false);
  }, [dispatch]);
  // loading spinner
  if (isLoading === true) {
    return (
      <div className="text-center py-2">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className={shopStyles.shop}>
      <Container className="py-5">
        <Row xs={1} md={4} className="g-4">
          {groceries.map((grocery) => (
            <Col key={grocery._id}>
              <SingleGrocery grocery={grocery} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
