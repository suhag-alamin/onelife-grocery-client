import React, { useEffect } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import OthersBanner from "../components/OthersBanner";
import useAuth from "../hooks/useAuth";
import { fetchOrderedItems } from "../redux/slices/orderSlice";

const MyAccount = () => {
  // get ordered groceries from redux store

  const { user } = useAuth();

  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrderedItems(user?.email));
  }, [dispatch, user?.email]);

  const { orderedGroceries } = useSelector((state) => state);
  const { orderedItems } = orderedGroceries;

  // loading spinner
  if (orderedGroceries.status === "pending") {
    return (
      <div className="text-center py-2">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div>
      {/* title */}
      <Header title="My Account - OneLife Grocery" />
      {/* banner  */}
      <OthersBanner>My Account</OthersBanner>
      <Container className={`py-5`}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Ordered Items</th>
              <th>Total Price $</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderedItems.map((item) => (
              <tr key={item._id}>
                <td>{item.userName}</td>
                <td>{item.city}</td>
                <td>
                  {item.orderedItems?.orderedItemsName?.map((name) => (
                    <tr key={name}>
                      <td>{name}</td>
                    </tr>
                  ))}
                </td>
                <td>$ {item.totalPrice}</td>
                <td>{item.payment}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MyAccount;
