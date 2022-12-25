import "./checkout-item.styles.scss";
import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const incrementItem = () => addItemToCart(cartItem);
  const decrementItem = () => removeItemFromCart(cartItem);
  const deleteItem = () => deleteItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItem}>
          {`<`}
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={incrementItem}>
          {`>`}
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={deleteItem}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
