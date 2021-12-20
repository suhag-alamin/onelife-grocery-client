import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../../components/Header";
import OthersBanner from "../../../components/OthersBanner";
import withAuth from "../../../components/withAuth";
import shopStyles from "../../../styles/Shop.module.scss";

const GroceryDetails = ({ grocery }) => {
  const router = useRouter();
  const { id } = router.query;
  const { name, description, price, productImg, categories, weight } = grocery;
  return (
    <>
      <Header title={`${name} - OneLife Grocery`} />
      {/* banner  */}
      <OthersBanner>{name}</OthersBanner>
      <Container className={`${shopStyles.groceryDetails} py-5`}>
        <h3>{name}</h3>
      </Container>
    </>
  );
};

export default withAuth(GroceryDetails);

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://onelife-grocery.herokuapp.com/groceries/${context.params.id}`
  );

  const grocery = await res.json();

  return {
    props: {
      grocery,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://onelife-grocery.herokuapp.com/groceries`);

  const groceries = await res.json();

  const ids = groceries.map((grocery) => grocery._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
