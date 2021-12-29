import React from "react";
import Header from "../components/Header";
import withAuth from "../components/withAuth";

const About = () => {
  return (
    <div>
      {/* title  */}
      <Header title="About -OneLife Grocery" />
      <h1 className="text-center py-5">About page coming soon</h1>
    </div>
  );
};

About.getInitialProps = async (props) => {
  console.info("##### Congratulations! You are authorized! ######", props);
  return {};
};

export default withAuth(About);
