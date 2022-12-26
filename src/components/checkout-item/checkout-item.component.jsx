import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import {
  ArrowButton,
  CheckoutItemContainer,
  ImageContainer,
  NameItem,
  PriceItem,
  QuantityItem,
  RemoveButton,
  ValueItem,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const incrementItem = () => addItemToCart(cartItem);
  const decrementItem = () => removeItemFromCart(cartItem);
  const deleteItem = () => deleteItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NameItem>{name}</NameItem>
      <QuantityItem>
        <ArrowButton onClick={decrementItem}>{`<`}</ArrowButton>
        <ValueItem>{quantity}</ValueItem>
        <ArrowButton onClick={incrementItem}>{`>`}</ArrowButton>
      </QuantityItem>
      <PriceItem>${price}</PriceItem>
      <RemoveButton onClick={deleteItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
