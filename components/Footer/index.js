import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerStyles from "../../styles/Footer.module.scss";
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import Image from "next/image";
import payment from "../../images/payments.jpg";

const Footer = () => {
  return (
    <footer className={footerStyles.footerSection}>
      <Container className="pt-4 pb-2">
        <Row className="mb-4 gap-4 gap-md-0">
          <Col xs={12} md={6} lg={3}>
            <div>
              <h4>Useful links</h4>
              <div className="d-flex flex-column gap-1 mt-3">
                <Link href="#">Contact us</Link>
                <Link href="#">Help & About us</Link>
                <Link href="#">Refund Policy</Link>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <div>
              <h4>Customer service</h4>
              <div className="d-flex flex-column gap-1 mt-3">
                <Link href="#">Orders</Link>
                <Link href="#">Downloads</Link>
                <Link href="#">Addresses</Link>
                <Link href="#">Account details</Link>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <div>
              <h4>Delivery</h4>
              <div className="d-flex flex-column gap-1 mt-3">
                <Link href="#">How it Works</Link>
                <Link href="#">Free Delivery</Link>
                <Link href="#">FAQ</Link>
                <Link href="#">Payment methods</Link>
                <Link href="#">Delivery areas</Link>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <div>
              <h4>Fell free to contact us</h4>
              <div className="d-flex flex-column gap-0 mt-3">
                <p className="d-flex align-items-center">
                  <BiPhoneCall className="fs-3 me-2" />
                  +88017 54697258
                </p>
                <p className="d-flex align-items-center">
                  <BiMailSend className="fs-3 me-2" />
                  info@onelife-grocery.com
                </p>
                <Image src={payment} alt="" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="border-top pt-1 gap-2 gap-md-0 ">
          <Col xs={12} md={6}>
            <span className={footerStyles.smallText}>
              {new Date().getFullYear()} - OneLife Grocery || Designed &
              Developed by
              <a
                href="https://github.com/developer-suhag"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Suhag Al Amin
              </a>
            </span>
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex gap-2 justify-content-md-end">
              <Link className={footerStyles.smallText} href="#">
                Privacy Policy
              </Link>
              <Link className={footerStyles.smallText} href="#">
                Terms and Conditions
              </Link>
              <Link className={footerStyles.smallText} href="#">
                Cookie
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
