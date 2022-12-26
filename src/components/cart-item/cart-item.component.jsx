import "./cart-item.styles.jsx";
import {
  CartItemContainer,
  ItemDetails,
  NameItem,
  PriceItem,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <NameItem>{name}</NameItem>
        <PriceItem>
          {quantity} x {`$${price}`}
        </PriceItem>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
