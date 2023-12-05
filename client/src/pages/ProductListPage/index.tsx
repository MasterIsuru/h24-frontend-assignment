import ProductListContainer from "../../containers/ProductListContainer";
import { MetaTag } from "../../components";

const ProductListPage = () => {
  return (
    <div>
      <MetaTag
        title={"Product List"}
        name={"Product List"}
        content={"Product List"}
      />
      <ProductListContainer />
    </div>
  );
};

export default ProductListPage;
