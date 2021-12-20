import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";
import homeStyes from "../../styles/Home.module.scss";

const Banner = () => {
  return (
    <div className={homeStyes.bannerSection}>
      <Container className="">
        <h1>OneLife Grocery</h1>
        <p>Natural Foods for your Family</p>
        <div className="text-center">
          <Link href="/shop" passHref>
            <Button variant="">Explore Shop</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
