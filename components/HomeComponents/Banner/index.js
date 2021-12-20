import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";
import homeStyes from "../../../styles/Home.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <div className={homeStyes.bannerSection}>
      <Container className="">
        <h1>OneLife Grocery</h1>
        <p>Natural Foods for your Family</p>
        <div className="text-center d-flex justify-content-center">
          <Link href="/shop" passHref>
            <Button className="d-flex align-items-center gap-2" variant="">
              Explore Shop <AiOutlineArrowRight />{" "}
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
