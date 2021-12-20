import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Header from "../../../components/Header";
import OthersBanner from "../../../components/OthersBanner";
import withAuth from "../../../components/withAuth";
import { addToCart } from "../../../redux/slices/cartSlice";
import shopStyles from "../../../styles/Shop.module.scss";

const GroceryDetails = ({ grocery }) => {
  const router = useRouter();
  const { id } = router.query;
  const { _id, name, description, price, productImg, categories, weight } =
    grocery;
  const dispatch = useDispatch();
  return (
    <>
      <Header title={`${name} - OneLife Grocery`} />
      {/* banner  */}
      <OthersBanner>{name}</OthersBanner>
      <Container className={`${shopStyles.groceryDetails} py-5`}>
        <div className="detailsBox w-75 mx-auto shadow p-3 text-center">
          <Image src={productImg} alt="" width={600} height={400} />
          <h3 className={shopStyles.title}>{name}</h3>
          <h4 className={shopStyles.price}>$ {price}</h4>
          <p>{description}</p>
          <h6>Additional Infomation</h6>
          <p>
            Category:
            {categories.map((category) => (
              <span key={category}>
                {" "}
                <b> {category}, </b>{" "}
              </span>
            ))}
          </p>
          <p>
            Weight: <b>{weight}</b>
          </p>
          <div className="d-flex justify-content-center my-2">
            <Button
              onClick={() => dispatch(addToCart(_id))}
              className="d-flex align-items-center gap-2"
              variant=""
            >
              Add to Cart
              <AiOutlineShoppingCart />
            </Button>
          </div>
        </div>
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
