import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";
import Button from "../../components/button/button.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Title,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <Fragment>
      <Title>Checkout Page</Title>
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
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
        <Total>Total: ${cartTotal}</Total>
      </CheckoutContainer>
    </Fragment>
  );
};

export default Checkout;
