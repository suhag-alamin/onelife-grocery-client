import React from "react";
import Header from "../components/Header";
import withAuth from "../components/withAuth";

const About = () => {
  return (
    <div>
      {/* title  */}
      <Header title="About -OneLife Grocery" />
      <h1>this is about</h1>
    </div>
  );
};

About.getInitialProps = async (props) => {
  console.info("##### Congratulations! You are authorized! ######", props);
  return {};
};

export default withAuth(About);
