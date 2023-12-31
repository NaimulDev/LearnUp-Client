import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./CheckOut.css";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const CheckOutFrom = ({ payment }) => {
  // eslint-disable-next-line react/prop-types
  const { price, courseTitle, _id, insEmail } = payment;
  console.log("pyment ", payment);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);
  console.log(price, axiosSecure);
  const handleSubmit = async (event) => {
    console.log(event);
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);
    console.log("payment intent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: price,
        date: new Date(),
        courseTitle: courseTitle,
        bookedId: _id,
        insEmail,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        // console.log(res.data);

        if (res.data.insertResult.insertedId) {
          fetch(`${import.meta.env.VITE_API_URL}/paymentBookMaker/${_id}`, {
            method: "PUT",
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${("payment successful", data.data)}`,
                showConfirmButton: false,
                timer: 1500,
              });
            });
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-10/12 mx-auto">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn-primary text-base rounded-xl mt-3"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>

      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600 ml-8">
          Your TransactionId : {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOutFrom;
