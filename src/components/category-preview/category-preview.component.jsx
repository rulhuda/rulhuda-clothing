import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  PreviewCategory,
  TitleCategory,
} from "./category-preview.styles.jsx";
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleCategory>
          <Link to={title} children={title.toUpperCase()} />
        </TitleCategory>
      </h2>
      <PreviewCategory>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewCategory>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
