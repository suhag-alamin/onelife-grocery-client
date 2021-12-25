import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeStyles from "../../../styles/Home.module.scss";

const ProductCategory = () => {
  return (
    <div className={`${homeStyles.productCategory}`}>
      <Container className={` py-5`}>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col className="h-100">
            <div className={`${homeStyles.breadPastries} p-5`}>
              <h3>Bread & Pastries</h3>
            </div>
          </Col>

          <Col className="h-100">
            <div className={`${homeStyles.vegitables} p-5`}>
              <h3>Vegetables</h3>
            </div>
          </Col>

          <Col className="h-100">
            <div className={`${homeStyles.dariy} p-5`}>
              <h3>Dairy</h3>
            </div>
          </Col>

          <Col className="h-100">
            <div className={`${homeStyles.meat} p-5`}>
              <h3>Meat</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductCategory;
