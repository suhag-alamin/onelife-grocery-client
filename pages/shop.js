import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchGroceries } from "../redux/slices/grocerySlice";
// https://onelife-grocery.herokuapp.com
const Shop = () => {
  const { groceries } = useSelector((state) => state.oneLifeGrocery);
  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroceries());
  }, [dispatch]);

  return (
    <div>
      <h3>this is shop {groceries.length}</h3>
    </div>
  );
};

export default Shop;
