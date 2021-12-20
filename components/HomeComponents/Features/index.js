import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GiFarmTractor, GiMilkCarton } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { BsPercent } from "react-icons/bs";
import homeStyles from "../../../styles/Home.module.scss";

const Features = () => {
  return (
    <Container className={`${homeStyles.featureSection} py-5`}>
      <Row xs={1} md={4}>
        <Col>
          <div className={`${homeStyles.featureBox} shadow-sm p-4`}>
            <GiFarmTractor className="" />
            <h4>Organic Products</h4>
          </div>
        </Col>

        <Col>
          <div className={`${homeStyles.featureBox} shadow-sm p-4`}>
            <MdDeliveryDining className="" />
            <h4>Home Delivery</h4>
          </div>
        </Col>

        <Col>
          <div className={`${homeStyles.featureBox} shadow-sm p-4`}>
            <BsPercent className="" />
            <h4>Best Deals</h4>
          </div>
        </Col>

        <Col>
          <div className={`${homeStyles.featureBox} shadow-sm p-4`}>
            <GiMilkCarton className="" />
            <h4>Fresh Products</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
