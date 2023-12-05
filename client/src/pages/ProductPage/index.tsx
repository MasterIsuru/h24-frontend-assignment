import { useMemo } from "react";

import { MetaTag } from "../../components";
import ProductContainer from "../../containers/ProductContainer";
import { useProductSelectors } from "../../redux/selectors/useProductSelectors";

const ProductPage = () => {
  const { selectedArticle } = useProductSelectors();

  const productName = useMemo(() => {
    if (selectedArticle?.name) {
      return selectedArticle?.name;
    }
    return "Product";
  }, [selectedArticle]);

  const productDescription = useMemo(() => {
    if (selectedArticle?.variantName) {
      return selectedArticle?.variantName;
    }
    return "Product";
  }, [selectedArticle]);

  return (
    <div>
      <MetaTag
        title={productName}
        name={productName}
        content={productDescription}
      />
      <ProductContainer />
    </div>
  );
};

export default ProductPage;
