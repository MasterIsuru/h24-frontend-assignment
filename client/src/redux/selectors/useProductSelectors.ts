import { useSelector } from "react-redux";

import { RootSliceType } from "../rootReducer";
import { ProductSliceState } from "../slices/productSlice";

const useProductSelectors = () => {
  const selectedArticle = useSelector<
    RootSliceType,
    ProductSliceState["selectedArticle"]
  >((state) => state.product.selectedArticle);

  const selectedTheme = useSelector<
    RootSliceType,
    ProductSliceState["selectedTheme"]
  >((state) => state.product.selectedTheme);

  return {
    selectedTheme,
    selectedArticle,
  };
};

export { useProductSelectors };
