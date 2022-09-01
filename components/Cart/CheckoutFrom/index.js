import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();

  const { totalPrice } = useSelector((state) => state.groceryCart);

  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState("");

  // useEffect(() => {
  //   axios
  //     .post("https://onelife-gocery-suhag.onrender.com/create-payment-intent", {
  //       totalPrice,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       setClientSecret(result.data?.clientSecret);
  //     });
  // }, [totalPrice]);

  async function stripeTokenHandler(token) {
    // const paymentData = { token: token.id };

    // // Use fetch to send the token ID and any other payment data to your server.
    // // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // const response = await fetch(
    //   "https://onelife-gocery-suhag.onrender.com/create-payment-intent",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(paymentData),
    //   }
    // );
    // console.log(paymentData);

    // // Return and display the result of the charge.
    // return response.json();
    axios
      .post("https://onelife-gocery-suhag.onrender.com/create-payment-intent", {
        totalPrice,
      })
      .then((result) => {
        setClientSecret(result.data?.clientSecret);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("object");
    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      setProcessing(false);
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setProcessing(false);
      toast.error(error.message);
    } else {
      // console.log(paymentMethod);
    }

    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      stripeTokenHandler(result.token);
    }

    // // payment intent
    // const { paymentIntent, error: intentError } =
    //   await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: card,
    //       billing_details: {
    //         name: user.displayName,
    //         email: user.email,
    //       },
    //     },
    //   });

    // if (intentError) {
    //   toast.error(intentError.message);
    //   setProcessing(false);
    // } else {
    //   setSuccess("Your payment processed successfully");
    //   toast.success("Your payment processed successfully");

    //   setProcessing(false);

    //   // save to database
    //   const payment = {
    //     amount: paymentIntent.amount,
    //     created: paymentIntent.created,
    //     last4: paymentMethod.card.last4,
    //     transaction: paymentIntent.id,
    //   };

    //   axios
    //     .post(`https://onelife-gocery-suhag.onrender.com/orders/`, payment)
    //     .then((result) => {
    //       console.log(result);
    //     });
    // }
  };

  return (
    <div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <CardElement
          className="card-element"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#457B9D",
                "::placeholder": {
                  color: "#457B9D",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Button variant="primary" type="submit" disabled={!stripe || success}>
          {processing ? (
            <div
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 0,
              }}
            >
              <Spinner animation="border" />
            </div>
          ) : (
            `Pay $ ${totalPrice}`
          )}
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
