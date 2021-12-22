import Image from "next/image";
import React from "react";
import cartStyles from "../../../styles/Cart.module.scss";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/slices/cartSlice";

const CartItem = ({ cartItem }) => {
  const { _id, name, price, productImg } = cartItem;
  const dispatch = useDispatch();
  return (
    <div
      className={`${cartStyles.singleItem} d-flex justify-content-between align-items-center rounded-3 shadow-sm`}
    >
      <div className="d-flex align-items-center gap-3">
        <Image
          className="rounded-circle shadow-sm"
          src={productImg}
          width={100}
          height={50}
          alt=""
        />
        <div>
          <h3 className={cartStyles.title}>{name}</h3>
          <h4 className={cartStyles.price}>$ {price}</h4>
        </div>
      </div>
      <div>
        <MdDeleteOutline
          onClick={() => dispatch(removeFromCart(_id))}
          className="fs-2"
          title="Remove from cart"
        />
      </div>
    </div>
  );
};

export default CartItem;
