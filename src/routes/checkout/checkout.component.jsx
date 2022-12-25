import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";
import Button from "../../components/button/button.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  console.log(cartItems);
  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Checkout Page</h1>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CheckoutItem key={cartItem?.id} cartItem={cartItem} />;
          })
        ) : (
          <Fragment>
            <h2>No items in cart!</h2>
            <Link to="/shop" title="Go to shop">
              <Button>Go to shop</Button>
            </Link>
          </Fragment>
        )}
        <span className="total">Total: ${cartTotal}</span>
      </div>
    </Fragment>
  );
};

export default Checkout;
