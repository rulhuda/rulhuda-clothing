import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProduct = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProduct}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
