import React from "react";
import ProductList from "./ProductList";
import { getApis } from "./getApis";

const Category = React.lazy(() => import("./Category"));
const listCategories = getApis();
const CategoryList = () => {
  return listCategories.categories.read().map((category) => {
    return (
      <div key={category.id} id={category.cat_nombre}>
        <Category id={category.id} nombre={category.cat_nombre} />
        <ProductList
          products={listCategories.products}
          categoryId={category.id}
          categoryName={category.cat_nombre}
        />
      </div>
    );
  });
};

export default CategoryList;
