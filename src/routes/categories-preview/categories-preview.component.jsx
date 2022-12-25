import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Shop Page</h1>
      <div className="shop-container">
        {categoriesMap ? (
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </Fragment>
  );
};

export default CategoriesPreview;
