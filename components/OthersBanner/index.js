import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.scss";
import { BsChevronBarRight } from "react-icons/bs";

const OthersBanner = ({ children }) => {
  return (
    <div className={styles.OthersBanner}>
      <div>
        <span className="d-flex justify-content-center align-items-center">
          <Link href="/">Home</Link>
          <BsChevronBarRight />
          <span>{children}</span>
        </span>{" "}
      </div>
    </div>
  );
};

export default OthersBanner;
