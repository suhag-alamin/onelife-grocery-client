import React from "react";
import { useSelector } from "react-redux";
import withAuth from "../components/withAuth";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.groceryCart);
  return (
    <div>
      <h5>this is cart {cartItems.length}</h5>
    </div>
  );
};

export default withAuth(Cart);
