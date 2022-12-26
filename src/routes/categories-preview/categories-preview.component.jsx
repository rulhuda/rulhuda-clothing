import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import {
  CategoryContainer,
  Loader,
  Title,
} from "./categories-preview.styles.jsx";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      <Title>Shop Page</Title>
      <CategoryContainer>
        {categoriesMap !== {} ? (
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        ) : (
          <Loader>Loading...</Loader>
        )}
      </CategoryContainer>
    </Fragment>
  );
};

export default CategoriesPreview;
